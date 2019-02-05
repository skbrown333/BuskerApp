# BuskerApp
This is a simple beginners application for full stack development. All skill levels and contributions are welcome.

The general idea is to create an application that will allow users to create realtime events that can be seen on a map.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

You will also need your own Google Maps API key. It will need to be stored in an environment variable name REACT_APP_GOOGLE_MAPS_KEY as well as placed in the index.html in web/public.

### Installing

You will need to download/clone the repo to your local machine

Say what the step will be

```
git clone https://github.com/skbrown333/BuskerApp.git
```

After this finished cd into both the web and api directories and run

```
npm install
```


## Deployment
To start the Web Server cd into web/ and run:
```
HTTPS=true npm start
```

To start up the backend cd into /api and run:
```
nodemon start
```

## Built With

* [React](https://reactjs.org/) - The front end web framework used
* [Express](https://expressjs.com/) - The back end framework
* [MongoDB](https://rometools.github.io/rome/) - The database

## Authors
* Steffan Brown - skbrown333@gmail.com

