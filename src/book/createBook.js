const router = require("express").Router();
const BookModel = require("./model");
const crypto = require("crypto");

router.post("/book", async function (req, res) {
  const { title, author, summary, isbn } = req.body;
  const book = await BookModel.findOne({ isbn });
  if(!book){
      const id = crypto.randomUUID();
      const createdAt = Date.now();
      const updatedAt = Date.now();
      let data = await BookModel.create({
        id,
        title,
        author,
        summary,
        isbn,
        createdAt,
        updatedAt,
      });
      data.save();
      res.send({message: "Book Uploaded", id, ...req.body, createdAt, updatedAt }).status(201);
  }
  res.send({message: "Book Already exist", ...book._doc }).status(400);
});

module.exports = router;
