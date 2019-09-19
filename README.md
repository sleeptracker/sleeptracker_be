# Sleeptracker BACK-END SERVER

## Server

https://get-sleeptracker.herokuapp.com/

## Dependencies

- "axios": "^0.19.0",
- "bcryptjs": "^2.4.3",
- "cors": "^2.8.5",
- "dotenv": "^8.0.0",
- "express": "^4.17.1",
- "helmet": "^3.18.0",
- "jsonwebtoken": "^8.5.1",
- "knex": "^0.17.6",
- "sqlite3": "^4.0.9"

## devDependencies

- "cross-env": "^5.2.0",
- "nodemon": "^1.19.1",
- "supertest": "^4.0.2"


# SUMMARY OF API ENDPOINTS

```

| Table     | Method | Endpoint                          | Description                                                                                                       
-------------------------------------------------------------------------------------------------------------------
| auth      | POST   | /api/auth/register                | Creates a new `user` profile using the information
|           |        |                                   | sent inside the `body` of the request and returns a
|           |        |                                   | message along with the new `user` and a JSON Web Token
|           |        |                                   | in the `body` of the response.   |
-------------------------------------------------------------------------------------------------------------------
| auth      | POST   | /api/auth/login                   | Uses the credentials sent inside the `body` to
|           |        |                                   | authenticate the user. On successful login, returns
|           |        |                                   | a message with the `user` profile and a JSON Web
|           |        |                                   | Token token in the `body` of the response. |
-------------------------------------------------------------------------------------------------------------------
| users     | GET    | /api/restricted/users             | Retrieves an array of `user` objects and returns a
|           |        |                                   | message with the array in the `body` of the response. |
-------------------------------------------------------------------------------------------------------------------
| users     | GET    | /api/restricted/users/:id         | Retrieves a single `user` object and returns a
|           |        |                                   | message with the object inside the `body` of the 
|           |        |                                   | response. |   
-------------------------------------------------------------------------------------------------------------------                                                         

```

## Users

```
{
  "id": 1,                                  // Integer (primary key provided by server and autoincrements)
  "username": "admin",                      // String, required
  "password": "password",                   // String, required
  "firstName": "admin",                     // String, required
  "lastName": "admin",                      // String, required
  "email": "admin@gmail.com"                // String, required
}
```
## Register Your Account

# URL: https://get-sleeptracker.herokuapp.com/api/auth/register

# HTTP method: POST

# Header
```
| Name         | Type   | Required | Description
-------------------------------------------------------------------------------------------------------------------
| Content-Type | String | Yes      | application/json
-------------------------------------------------------------------------------------------------------------------

```

# Body
```
| Name         | Type   | Required | Description
-------------------------------------------------------------------------------------------------------------------
| username     | String | Yes      | Must e unique
| password     | String | Yes      | 
| firstname    | String | Yes      | 
| lastname     | String | Yes      | 
| email        | String | Yes      | Must e unique

Example
{
  "username": "trevor",
  "password": "password",
  "firstName": "trevor",
  "lastName": "turner",
  "email": "trevor@gmail.com"
}
-------------------------------------------------------------------------------------------------------------------

#### Response

##### 200 (OK)

> If you successfully register a user the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "error": false,
    "message": "Account successfully created.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6InRyZXZvciIsImlhdCI6MTU2MTQwMTU3MSwiZXhwIjoxNTYxNDg3OTcxfQ.oflH8T88CZhObzBj3oRCBkqKeau-8jLC9yeDO8JJZ94",
    "user": {
        "id": 6,
        "username": "trevor",
        "firstName": "trevor",
        "lastName": "turner",
        "email": "trevor@gmail.com",
        "created_at": "2019-06-24 18:39:31",
        "updated_at": "2019-06-24 18:39:31"
    }
}
```

##### 406 (Not Acceptable)

> If you are missing a username, password, first name, last name, or email for registration, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
    "error": true,
    "user": {},
    "message": "Include required credentials and try again."
}
```

##### 409 (Conflict)

> If the submitted username or email is a duplicate of what is already in the database, the endpoint will return an HTTP response with a status code `409` and a body as below.

```
{
    "error": true,
    "usernameError": true or false if username exists,
    "emailError": true or false if email exists,
    "message": "Username and email already exist."
}
```

##### 404 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "error": true,
  "user": {},
  "message": "Error creating account in the database."
}
```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "error": true,
  "user": {},
  "message": "Error with your request."
}
```
## **LOGIN**

### **Logs a user in**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description                                                           |
| ---------- | ------ | -------- | --------------------------------------------------------------------- |
| `username` | String | Yes      | Must match a username in the database                                 |
| `password` | String | Yes      | Must match a password in the database corresponding to above username |

_example:_

```
{
  "username": "admin",
  "password": "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "error": false,
    "message": "Login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6InRyZXZvciIsImlhdCI6MTU2MTQwMjMxNSwiZXhwIjoxNTYxNDg4NzE1fQ.XNIVmIStN8XT7vxuXz-E0Z0b8-J3tsm1KktDFR2VR8Q",
    "user": {
        "id": 6,
        "username": "trevor",
        "firstName": "trevor",
        "lastName": "turner",
        "email": "trevor@gmail.com",
        "created_at": "2019-06-24 18:39:31",
        "updated_at": "2019-06-24 18:39:31"
    }
}
```

##### 406 (Not Acceptable)

> If you are missing a username or password for login, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
  "error": true,
  "user": {},
  "message": "Please include a username and password and try again."
}
```

##### 404 (Not Found)

> If you send in an email address that does not match one in the database or the passwords do not match, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "error": true,
  "user": {},
  "message": "Sorry, you could not be logged in."
}
```

##### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "error": true,
  "user": {},
  "message": "Error with your request."
}
```
