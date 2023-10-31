const router = require("express").Router();

// import book routes
const getAllBooks = require("./book/getAllBooks");
const getBookById = require("./book/getBookById");
const createBook = require("./book/createBook");
const updateBookById = require("./book/updateBookById");
const deleteBookById = require("./book/deleteBookById");

// Define book routes
router.use("/", getAllBooks);
router.use("/", getBookById);
router.use("/", createBook);
router.use("/", updateBookById);
router.use("/", deleteBookById);

module.exports = router;