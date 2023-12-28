//server creation


const express = require('express')
const app = express()
//iske andar express ka app chalega
//express node ki library he backend k liye
const port = 4000

//define route

app.get('/',(req,res)=>{
    res.send("hello this is your express server")
})
//we are sending the request app.get and '/'is end point
//req and res ???

//start the server
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})

//go to package.json me jake create path for start

