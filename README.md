## Project installation
This project can be installed by
+ Click the botton titled code in the repo
+ Copy the http link
+ Open your terminal and run git clone `https://github.com/MaryannChidimma/techinnover-test.git`

+ cd to the root folder
+ Create a .env file
+ Check what is required in the env from that sampleEnv file, then supply the appropriate values.
+ Run the command `npm install` to intall all dependencies used
+ Run the command `npm run dev`

## Project Documentation
Here is a link to the Postman documentation `https://documenter.getpostman.com/view/19693532/2s847BSuni`

## Project Explanation and Reason for Using file Based DB
  +For this project a file based storage is used instead of an external database,
  +the following are the reasons:
    1. MongoDb : mongo db Id's are not in number(eg : 1, 2 ) rather a combination of 25 charaters is used
    2. Postgres : Postgres would have rather been a great option, but It require some setup and migration before my code could be run on another local computer.
    3. SQlite : I also considered using sqlite, because unlike posgres, it is light weight and requires no installation and migration, but file based database still showcase my problem solving skills more.


   
 

