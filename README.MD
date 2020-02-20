# Onix Node Internship lesson 2

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Find all Users

```
    curl --location --request GET 'localhost:3000/v1/users/' \
```

### Find User

```
    curl --location --request GET 'localhost:3000/v1/users/find' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```

### Create User

```
    curl --location --request POST 'localhost:3000/v1/users/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "fullName": "Test User"
    }'
```

### Update User

```
    curl --location --request PUT 'localhost:3000/v1/users/update/:userId' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "fullName": "Update User"
    }'
```

### Delete User

```
    curl --location --request DELETE 'localhost:3000/v1/users/delete' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```
