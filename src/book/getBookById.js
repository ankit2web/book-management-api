const router = require("express").Router();
const BookModel = require("./model");

// Get a book by ID
router.get("/book/:id", async function (req, res) {
  const bookId = req.params.id;

  try {
    const book = await BookModel.findOne({ id: bookId });

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
