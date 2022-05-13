var express = require('express');
var router = express.Router();
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get('/', (req, res) => {
  res.status(200).json({
    message: "login",
  })
})

router.post("/upload", upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success",
  });
})

module.exports = router;


// let arr = [];

//Get method

// router.get('/read', (req, res) => {
//   res.status(200).json({
//     message: "read success!!",
//   })
// })

// //POST method

// router.post('/create', (req, res) => {
//   const data = req.body.data;
//   arr.push(data);
//   res.status(200).json({
//     message: "Create success",
//     result: arr,
//   })
// })

// //PUT method

// router.put("/update/:id",(req, res) => {
//   const { id } = req.params;
//   const {data} = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "Create success",
//     result: arr,
//   })
// })

// //DELETE method

// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success",
//     result: arr,
//   })
// })




