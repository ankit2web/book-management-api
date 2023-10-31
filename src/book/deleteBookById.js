const router = require("express").Router();
const BookModel = require("./model");

// Delete a book by ID
router.delete("/book/:id", async function (req, res) {
  const bookId = req.params.id;

  try {
    const deletedBook = await BookModel.findOneAndDelete({ id: bookId });

    if (deletedBook) {
      res.json({ message: "Book deleted", deletedBook });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
