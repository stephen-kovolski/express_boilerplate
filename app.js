const express = require('express');
const app = express();
const port = 3000
//const myMotel = require('./my_motel.js')

//app.use(express.static("public"));

let myMotel = [
  {
    id: 1,
    room_number: 101,
    room_price: 89.99,
    available: false,
    checkin_date: '2023-04-10',
    checkout_date: '2023-04-14',
    customer_name: 'John Smith',
    customer_phone: '555-1234',
    notes: 'Late check-in requested'
  },
  {
    id: 2,
    room_number: 102,
    room_price: 89.99,
    available: false,
    checkin_date: '2023-04-12',
    checkout_date: '2023-04-15',
    customer_name: 'Jane Doe',
    customer_phone: '555-5678',
    notes: 'Early check-out requested'
  },
  {
    id: 3,
    room_number: 103,
    room_price: 99.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 4,
    room_number: 104,
    room_price: 99.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 5,
    room_number: 105,
    room_price: 109.99,
    available: false,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 6,
    room_number: 106,
    room_price: 109.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 7,
    room_number: 107,
    room_price: 119.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 8,
    room_number: 108,
    room_price: 119.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 9,
    room_number: 109,
    room_price: 129.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 10,
    room_number: 110,
    room_price: 129.99,
    available: true,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  }
];
let new_array = []
app.get('/', function (req, res) {
  for (let i = 0; i < myMotel.length; i++){
      if (myMotel.available == true){
        //new_array.push(myMotel[i])
        res.send(myMotel)
        }
    
        //res.sendFile(__dirname + "/public/index.html");

  }
});

//    const path = process.cwd() + '/html/home.html';


app.listen(port)
console.log(`listening on port ${port}`);



