
# Upshare : Online File Sharing Service (Backend)

Rest api to power a file sharing functionality in application.
>Built using Node, Express, Mongo.
Uploaded files are available to download for next 24 hours


## Getting Started

### Prerequisites -

1. Install Node.Js
```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
2. Install npm
```
$ sudo apt-get install npm
```
3. Install MongoDB
```
https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/
```

### Run Software

1. Clone Repo
```
$ git clone https://github.com/unicode-Ind/UpShare.git
```
2. Change Directory
```
$ cd UpShareBackend/
```
3. Install Dependencies 
```  
$ npm install
```  
OR 
```  
$ yarn install
```
4. Start server
```
$ node server.js
```

Server would be running at port 3000.


Also do not forget to rename `.env.example` into `.env` an put all credentials.
You need to set environment variables MONGO_CONNECTION_URL, SMTP_HOST, SMTP_PORT, MAIL_USER, MAIL_PASSWORD and ALLOWED_CLIENTS.
>For more info refer API files in router folder.


## Repository Structure 
   
    UpShareBackend/
    ├── config/                  # Configuration files
    │
    ├── models/                  # MongoDB database models
    │
    ├── public/                  #Project assets including CSS, Images, Icons, JavaScripts files
    │   ├── css/                    
    │   ├── img/
    │   ├── favicon.ico
    │   
    ├── routes/                  # Backend API routes
    ├── services/                # Files related to email sending
    ├── uploads/                 # Uploaded files stored here
    ├── views/                   # All HTML/EJS files                                  
    ├── README.md                # README file
    ├── package.json             # Holds metadata relevent to project & project's dependencies 
    ├── .gitignore               # Git ignore files 
    └── server.js                # Node App start file


## Authors

- [Arvinder Singh](https://github.com/unicode-Ind)


Invite me to connect on LinkedIn [@singh-arvinder](https://www.linkedin.com/in/singh-arvinder)

  
## Support

If you have a bug or idea you want to develop, you can open a new issue in this repository. We are very interested in any feedback you have about using it!

For support, email arvindersingh11.007@gmail.com