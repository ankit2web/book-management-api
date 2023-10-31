const router = require("express").Router();
const BookModel = require("./model");

// Update a book by ID
router.put("/book/:id", async function (req, res) {
  const bookId = req.params.id;
  const { title, author, summary } = req.body;
  const updatedAt = Date.now();

  try {
    const updatedBook = await BookModel.findOneAndUpdate(
      { id: bookId },
      { title, author, summary, updatedAt },
      { new: true }
    );

    if (updatedBook) {
      res.json({ message: "Book updated", updatedBook });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;