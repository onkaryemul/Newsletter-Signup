
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = process.env.MAILCHIMP_API_URL;
    const options = {
        method: "POST",
        auth: `${process.env.USERNAME}:${process.env.API_KEY}`
    }

    const request = https.request(url, options, function(response) {
        
        if(response.statusCode === 200) {
            // res.send("Successfully subscribed!");
            res.sendFile(__dirname + "/success.html");
        } else {
            // res.send("There was an error with signing up, please try again!");
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();
    
    // console.log(`First Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email}`);
    // res.send(`<h1>Successful</h1>`);
});


app.post("/failure", function(req,res) {
    res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});


