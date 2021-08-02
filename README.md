# How to install the project & dependencies locally

### 1. Clone the project locally
### 2. Install the npm dependencies
 #### a. Go to backend folder and type the following command
       npm install
 #### b. Go to frontend folder and type the following command
       npm install

# How to run the project

### 1. Go to backend folder of repository to start nodeserver and type in terminal:
       nodemon

### 2. Go to frontend folder of repository to start react server, type in terminal
       npm start


# Database contains 1 collection
## 1. subscription_list: That holds all the subscribed users data.



# All APIs
## Base url: http://localhost:5000/api/v1/subscription

### 1. GET  /get
      a. url: http://localhost:5000/api/v1/subscription/get
      b. This will give all the documents in the database
      
### 2. POST  /post
      a. url: http://localhost:5000/api/v1/subscription/post
      b. Make post request with following example of JSON body
        {
          "firstname":"Raze",
          "lastname":"bot",
          "email":"raze@gmail.com"
        }

### 3. GET  /get/:email
      a. url: http://localhost:5000/api/v1/subscription/get/:email
      b. This will give the details of specific subscribed user.
  

### 4. DEL  /remove
      a. url: http://localhost:5000/api/v1/subscription/remove
       b. Make post request with following example of JSON body to remove the data
        {
          "email":"raze@gmail.com"
        }

    


