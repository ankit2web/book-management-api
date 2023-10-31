/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books from the database.
 *     tags:
 *       - Book
 *     responses:
 *       200:
 *         description: A list of books retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               count: <number_of_books>
 *               bookList: [
 *                 {
 *                   id: <book_id>,
 *                   title: <book_title>,
 *                   author: <book_author>,
 *                   summary: <book_summary>,
 *                   isbn: <book_isbn>,
 *                   createdAt: <book_createdAt_timestamp>,
 *                   updatedAt: <book_updatedAt_timestamp>
 *                 },
 *                 // Additional book objects
 *               ]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: An error occurred while fetching books
 */