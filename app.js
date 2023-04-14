const express = require('express');
const app = express();
const port = 3000
const myMotel = require('./my_motel.js')

//app.use(express.static("public"));


app.get('/', function (req, res) {
  for (let i = 0; i < myMotel.length; i++){
  if (myMotel[i].available == true){
      
    }
    //res.sendFile(__dirname + "/public/index.html");

    res.status(200).json({
      message: "successful get request",
      display: res.send(myMotel[i].available)

    })
    
  }
});

//    const path = process.cwd() + '/html/home.html';


app.listen(port)
console.log(`listening on port ${port}`);



