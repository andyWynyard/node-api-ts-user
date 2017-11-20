# User API

### A user API that doesn't delete the user if the DELETE endpoint is taken. Instead a toggle is switched, and the user can't be found after that. The DBA will still be able to use the data.

```
GET http://localhost:3000/api/v1/users
GET http://localhost:3000/api/v1/users/:id
POST http://localhost:3000/api/v1/users
PUT http://localhost:3000/api/v1/users/:id
DELETE http://localhost:3000/api/v1/users/:id
```

### Instructions:

1. Clone
2. `yarn ts`
3. `yarn server`
