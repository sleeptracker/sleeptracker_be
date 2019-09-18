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

`Users`

```
{
  "id": 1,                                  // Integer (primary key provided by server and autoincrements)
  "username": "admin",                      // String, required
  "password": "password",                   // String, required
  "firstName": "admin",                     // String, required
  "lastName": "admin",                      // String, required
  "email": "admin@gmail.com"                // String, required
}

# SUMMARY OF API ENDPOINTS

| Table     | Method | Endpoint                              | Description                                                                                                                                                                                    |
| --------- | ------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth      | POST   | /api/auth/register                    | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| auth      | POST   | /api/auth/login                       | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |
| users     | GET    | /api/restricted/users                 | Retrieves an array of `user` objects and returns a message with the array in the `body` of the response.                                                                                       |
| users     | GET    | /api/restricted/users/:id             | Retrieves a single `user` object and returns a message with the object inside the `body` of the response.                                                                                      |
| journals  | GET    | /api/restricted/journals              | Retrieves an array of `journal` objects and returns a message with the array in the `body` of the response.                                                                                    |
| journals  | GET    | /api/restricted/journals/:id          | Retrieves a single `journal` object using the id sent in the URL parameters of the request and returns a message with the object inside the `body` of the response.                            |
| journals  | POST   | /api/restricted/journals              | Uses the information sent inside the `body` to create a new `journal` for a specified user by included `userId` and returns a message along with the new `journal`.                            |
| journals  | PUT    | /api/restricted/journals/:id          | Uses the information sent inside the `body` to update a single `journal` using the id sent in the URL parameters of the request and returns a message along with the updated `journal`.        |
| journals  | DELETE | /api/restricted/journals/:id          | Removes a `journal` in the database using the id sent in the URL parameters of the request.                                                                                                    |
| exercises | GET    | /api/restricted/exercises             | Retrieves an array of `exercise` objects and returns a message with the array in the `body` of the response.                                                                                   |
| exercises | GET    | /api/restricted/exercises/journal/:id | Retrieves a single `journal` object's `exercises` using the id sent in the URL parameters of the request and returns a message with the `exercises` inside the `body` of the response.         |
| exercises | GET    | /api/restricted/exercises/:id         | Retrieves a single `exercise` object and returns a message with the object in the `body` of the response.                                                                                      |
| exercises | POST   | /api/restricted/exercises             | Uses the information sent inside the `body` to create a new `exercise` for a specified user by included `userId` and returns a message along with the new `exercise`.                          |
| exercises | PUT    | /api/restricted/exercises/:id         | Uses the information sent inside the `body` to update a single `exercise` using the id sent in the URL parameters of the request and returns a message along with the updated `exercise`.      |
| exercises | DELETE | /api/restricted/exercises/:id         | Removes an `exercise` in the database using the id sent in the URL parameters of the request.                    