# Event App

This is a fullstack web app to be used to see nearby events and to create events visible to the public!

![alt text](https://raw.githubusercontent.com/skbrown333/EventApp/dev/Mock_Photo_1.png)
![alt text](https://raw.githubusercontent.com/skbrown333/EventApp/dev/Mock_Photo_2.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

You will also need your own Google Maps API key. It will need to be stored in an environment variable name REACT_APP_GOOGLE_MAPS_KEY as well as placed in the index.html in web/public.

### Installing

You will need to download/clone the repo to your local machine

```
git clone https://github.com/skbrown333/EventApp.git
```

After this finished cd into both the web and api directories and run

```
npm install
```

## Running Locally

To start the Web Server cd into web/ and run:

```
HTTPS=true npm start
```

To start up the backend cd into /api and run:

```
nodemon start
```

## Built With

- [React](https://reactjs.org/) - The front end web framework used
- [Express](https://expressjs.com/) - The back end framework
- [MongoDB](https://rometools.github.io/rome/) - The database

## Authors

- Steffan Brown - skbrown333@gmail.com
