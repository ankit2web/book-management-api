const router = require("express").Router();

// import book routes
const getAllBooks = require("./book/getAllBooks");
const createBook = require("./book/createBook");

// Define book routes
router.use("/", getAllBooks);
router.use("/", createBook);

module.exports = router;