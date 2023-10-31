const router = require("express").Router();
const BookModel = require("./model");

router.get("/books", async function (_req, res) {
  const bookList = await BookModel.find();
  res.send({ count: bookList.length, bookList }).status(200);
});

module.exports = router;
