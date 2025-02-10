const express = require("express")
const app=("express")

app.use=("express.json")

app.post("/username",async=>{
    try {
        if(username){
            res.status(200)=(username)
        
        }
    } catch (error) {
        res.status(400)=("username cannot be empty")
        
    }
})
app.post("/email",async=>{
    try {
        if(email){
            res.status(200)=(email)
        
        }
    } catch (error) {
        res.status(400)=("email cannot be empty")
        
    }
})    

app.post("/password",async=>{
    try {
        res.status(200)=(password)
        
    } catch (error) {
        if(password>8||(password<16)){
            res.status(400)=("password length should be greater than 8 or less than or equal to 16")
        
        }
        else{
            res.status(200)=("password")
        }
        
    }
})    


let port=8080

app.listen(port,async=>{
    try {
        res.send("server is running on" `$http:/localhost:8080`)
    } catch (error) {
        res.send("Internal server error")
    }
})
