# User API

### A user API that doesn't delete the user if the DELETE endpoint is taken. Instead a switch is toggled, and the user can't be found after that. The DBA will still be able to use the user data, however the end points wont reveal the data.

```
GET http://localhost:3000/api/v1/users
GET http://localhost:3000/api/v1/users/:username
POST http://localhost:3000/api/v1/users
PUT http://localhost:3000/api/v1/users/:username
DELETE http://localhost:3000/api/v1/users/:username
```

### Instructions:

1. Clone
2. `yarn ts`
3. `yarn server`

It is set up to work with an external MongoDB, so it should work right out of
the box without MongoDB running locally.
