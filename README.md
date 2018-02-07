# login-react

VERSION IMAGE

See 'drupal' screenshot uploaded to this repository 

DATABASE DUMP

The drupal database dump is in this repository

DRUPAL 8.4

1. git clone https://github.com/wodby/docker4drupal.git
2. cd docker4drupal
3. docker-compose up -d
4. go to http://drupal.docker.localhost:8000
5. any issues check container status at http://portainer.drupal.docker.localhost:8000

REACT

npm run build

the request is a GET with basic auth and returns an array with some random current user info

NOTE:

Because I couldn't get CORS to work I have mocked the login data returned from drupal




