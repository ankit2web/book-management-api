const router = require("express").Router();
const BookModel = require("./model");
const crypto = require("crypto");
const validation = require("./validation/book.validation");

router.post("/book", validation(false), async function (req, res) {
  const { isbn } = req.body;
  const book = await BookModel.findOne({ isbn });
  if(!book){
      const id = crypto.randomUUID();
      const createdAt = Date.now();
      const updatedAt = Date.now();
      let data = await BookModel.create({ id, ...req.body, createdAt, updatedAt });
      data.save();
      res.send({message: "Book Uploaded", id, ...req.body, createdAt, updatedAt }).status(201);
  }
  res.send({message: "Book Already exist", ...book._doc }).status(400);
});

module.exports = router;
