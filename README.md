# RSS_CRUD_API

This app is an implementation of the [task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md) of the same name on the RSS Node.js course.

## Installation

To install this app clone this repository and pass to the `develop` branch, or download the `develop` branch. Next move to app folder and run in your terminal `npm install` to install dependencies.

## Launching

To launch app in develop mode execute in your terminal `npm run start:dev`. Then you can send requests to described in task endpoints.
To launch app in production mode execute in your terminal `npm run start:prod`. After that you'll can see the `build` folder inside the app-folder with converted to js app source code.

## Using the App

1. Implemented endpoint `api/users`:
    - **GET** `api/users` is used to get all persons
        - Server answers with `status code` **200** and all users records
    - **GET** `api/users/{userId}` 
        - Server answers with `status code` **200** and record with `id === userId` if it exists
        - Server answers with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with `status code` **404** and corresponding message if record with `id === userId` doesn't exist
    - **POST** `api/users` is used to create record about new user and store it in database
        - Server answers with `status code` **201** and newly created record
        - Server answers with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    - **PUT** `api/users/{userId}` is used to update existing user
        - Server answers with` status code` **200** and updated record
        - Server answers with` status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with` status code` **400** and corresponding message if request `body` does not contain **required** fields
        - Server answers with` status code` **404** and corresponding message if record with `id === userId` doesn't exist
    - **DELETE** `api/users/{userId}` is used to delete existing user from database
        - Server answers with `status code` **204** if the record is found and deleted
        - Server answers with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with `status code` **404** and corresponding message if record with `id === userId` doesn't exist
2. Users are stored as `objects` that have following properties:
    - `id` — unique identifier (`string`, `uuid`) generated on server side
    - `username` — user's name (`string`, **required**)
    - `age` — user's age (`number`, **required**)
    - `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
3. Requests to non-existing endpoints (e.g. `some-non/existing/resource`) are answered with `status code` **404** and corresponding human-friendly message.
4. Errors on the server side that occur during the processing of a request are handled and processed by answering with `status code` **500** and corresponding human-friendly message.
5. Value of `port` on which application is running are stored in `.env` file or if such file or appropriate variable doesn't exist equals `3000` by default.