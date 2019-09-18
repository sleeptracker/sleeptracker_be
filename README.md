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

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |