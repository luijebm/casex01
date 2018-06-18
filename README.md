 

CASEX01
=================
By Luis Bello Moraes
lbm@theline.pt
+ 351 934 770 492


Please take notice of the following info:

- environment variables are in the following file "\src\main\resources\application.yml" 


  endpoints:
    airports: http://localhost:8080/airports/ 
    fares: http://localhost:8080/fares/

  statsfilepath: stats/storage.externalize

  oauth:
    tokenUrl: http://localhost:8080/oauth/token
    grantType: client_credentials
    clientId: travel-api-client
    clientSecret: psw

  allowedcors: http://localhost:4200
  (this one is for angular testing porposes, to enable cross-origin resource sharing)


The Frontend Module was made in Angular 6. You can find it in folder "/ng6"
The frontend build files are included in the java application by the use of a symlink.
Git failed to add this symbolic link to the repo... 
Please refer to "/ng6/readme" for more info. It is crucial to create this link before building the fronted.

Please feel welcome to call if you need any assistance.

Thank you very much.
Luis

IT WAS FUN! :D

[http://localhost:9000/index.html](http://localhost:9000/index.html)