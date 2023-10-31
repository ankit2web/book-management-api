const router = require("express").Router();
const BookModel = require("./model");
const crypto = require("crypto");

router.post("/book", async function (req, res) {
  const { title, author, summary } = req.body;
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  const updatedAt = Date.now();
  let data = await BookModel.create({
    id,
    title,
    author,
    summary,
    createdAt,
    updatedAt,
  });
  data.save();
  res.send({message: "Book Uploaded", id, ...req.body, createdAt, updatedAt }).status(201);
});

module.exports = router;
