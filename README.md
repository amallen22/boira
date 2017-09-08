[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](http://mongoosejs.com/)
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Normalizecss](https://necolas.github.io/normalize.css/logo.svg)](https://necolas.github.io/normalize.css/)

# [Böira](https://boira.herokuapp.com/#!/) / [Admin](https://boira.herokuapp.com/admin)

This project was made during Skylab Coders Bootcamp.
BÖIRA is a catalan band of post rock music. 
This project is his corporate website.
They can manage the products from the admin to be sold on the online store and the during the events.
You can listen and buy there music that they made.

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

---
### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:
  ```
  PORT=3022
  ```

- Mongodb path and database to use:
  ```
  urDb=mongodb://localhost:27017/boira'
  ```

- Cloud name from Cloudinary:
  ```
  CLOUD_NAME=XXXXXXXXXX
  ```
  
- Api key to Cloudinary:
  ```
  API_KEY=XXXXXXXXXX
  ```

- Secret key to Cloudinary:
  ```
  API_SECRET=XXXXXXXXXX
  ```
  

- Secret word to encrypt users' passwords:
  ```
  SECRET=XXXXXXXXXX
  ```
  
---

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically

### To run in dev mode:

```
$npm run dev
```


## API

The server part has multiple **API endpoints** using several routes:

- `/api/products` -> Serves the internal data of all products.
- `/api/product/:id` -> Serves the internal data of one specific product.

- `/api/events` -> Serves the internal data of all events.
- `/api/event/:id` -> Serves the internal data of one specific event.

---

## Built with:

- **Front-end**

    - bootstrap: ^3.3.7,
    - ng-file-upload: ^12.2.13,
    - angular: 1.6.6
      + angular-route: ^1.6.6,
      + angular-jwt: ^0.1.9,
    - normalize-css: normalize.css#^7.0.0,
    - font-awesome: ^4.7.0

- **Back-end**
    - body-parser: ^1.17.2,
    - bower: ^1.8.0,
    - cloudinary: ^1.8.0,
    - del: ^2.2.2,
    - dotenv: ^4.0.0,
    - express: ^4.15.4,
    - mongoose: ^4.11.9,
    - multer: ^1.3.0,
    - path: ^0.12.7,
    - pug: ^2.0.0-rc.4,
    - jsonwebtoken: ^7.4.3,
    - passport: ^0.4.0,
      + passport-jwt: ^3.0.0,
      + passport-local: ^1.0.0,
      + passport-local-mongoose: ^4.2.1

- **Dev dependencies**
    "bower": "^1.8.0",
    "node-sass": "^4.5.3"
---

## Author

[Alex Mallén Ginés](https://github.com/amallen22)


