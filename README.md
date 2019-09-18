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

| Table     | Method | Endpoint                              | Description                                                                                                                                                                                    |
| --------- | ------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth      | POST   | /api/auth/register                    | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| auth      | POST   | /api/auth/login                       | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |
| users     | GET    | /api/restricted/users                 | Retrieves an array of `user` objects and returns a message with the array in the `body` of the response.                                                                                       |
| users     | GET    | /api/restricted/users/:id             | Retrieves a single `user` object and returns a message with the object inside the `body` of the response.                                                                                      |
                                                                                                |
