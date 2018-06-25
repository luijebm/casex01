

# CASEX01 - ANGULAR 6 FRONTEND
=========
By Luis Bello Moraes
lbm@theline.pt
phone: 00 351 934 770 492


This is the root folder of the Frontend Module generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In folder "\ng6\lbmcasex01\src\environments" you will find the environment variables. There are currently defined as follows:

    endPointAirports: 'http://localhost:9000/airports',
    endPointFares: 'http://localhost:9000/fares',
    endPointStats: 'http://localhost:9000/stats'

This is the server hosting the JAVA application: http://localhost:9000, used mainly for testing purposes.


## Build

Its possible that you need to update project dependencies by running `npm update`. After that run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

IMPORTANT!

Git failed to upload the Symbolic Link.

To expose the frontend withing the Java Application, please create a symlink  from folder "\ng6\lbmcasex01\dist" to folder "\src\main\resources\static\dist"
The java application is expecting the webpack files to be in the following folder: "\src\main\resources\static\dist\lbmcasex01"