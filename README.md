 

# CASEX01 - BACKEND+FRONTEND
=========
By Luis Bello Moraes
lbm@theline.pt
phone: 00 351 934 770 492


Please take notice of the following info:

- environment variables are in the following file "\src\main\resources\application.yml" 


ENDPOINTS

    airports: http://localhost:8080/airports/ 

    fares: http://localhost:8080/fares/

OAUTH

    tokenUrl: http://localhost:8080/oauth/token

    grantType: client_credentials

    clientId: travel-api-client

    clientSecret: psw

OTHERS

    statsfilepath: stats/storage.externalize
     
    allowedcors: http://localhost:4200
 (this one is for angular testing porposes, to enable cross-origin resource sharing)


+The Frontend Module was made in Angular 6. You can find it in folder "/ng6"
The frontend build files are included in the java application by the use of a symlink.
Git failed to add this symbolic link to the repo... 
Please refer to "/ng6/readme" for more info. It is crucial to create this link before building the fronted.

After creating the symlink, please update Angular project dependencies by running `npm update` in its home directory. 
Now build the frontend running  `ng build` and build the backend in the root folder by running `gradlew bootRun`. 

After that click on: [http://localhost:9000/index.html](http://localhost:9000/index.html)

Paths are not correctly setup in the ResourceHandlerRegistry to support Angular routing system, so if you refresh an Angular page you will get a 404.
Please stick to this URL for app launching.

Please feel welcome to call if you need any assistance.

Thank you very much.
Luis

IT WAS FUN! :D

