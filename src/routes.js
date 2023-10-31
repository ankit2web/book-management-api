const express = require('express');
const router = express.Router();

// import book routes
const getAllBooks = require("./book/getAllBooks");

// Define book routes
router.use("/", getAllBooks);

module.exports = router;