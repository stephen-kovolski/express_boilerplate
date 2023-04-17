const express = require('express');
const router = express.Router()
const myMotel = require('../my_motel.js')

let availableRooms = [];



router.get('/', function (req, res) { //welcome page
    res.send('welcome')
  
  });

router.get('/available', function (req, res) { 
    myMotel.forEach(function(room){
      if (room.available === true) {
        availableRooms.push(room);
      }
    });
    res.send(availableRooms)
  });

  //add new rooms to myMotel
router.post('/available', function(req, res) {

    const new_room = {
      id: myMotel.length + 1, 
      room_number: myMotel.length + 100,
      room_price: 0,
      available: "",
      checkin_date: "",
      checkout_date: "",
      customer_name: "",
      customer_phone: 1234567890,
      notes: "",
    }
  //push the new room that was just creeated into the array
  myMotel.push(new_room)
  res.send(new_room) //send the new room to the client to give the new id and to make sure it worked
  
  
  })

  //updated room options.  Adding amenities
router.put('/rooms/:id', function(req, res){




})

//display the clients choice
router.get('/booking/:id', function(req, res){
  res.send("hello")
})
  
  



  module.exports = router