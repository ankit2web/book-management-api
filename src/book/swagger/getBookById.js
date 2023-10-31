/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a book by its unique identifier.
 *     tags:
 *       - Book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The unique identifier of the book to retrieve.
 *         type: string
 *     responses:
 *       200:
 *         description: Book retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               id: <book_id>
 *               title: <book_title>
 *               author: <book_author>
 *               summary: <book_summary>
 *               isbn: <book_isbn>
 *               createdAt: <book_createdAt_timestamp>
 *               updatedAt: <book_updatedAt_timestamp>
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             example:
 *               message: Book not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: An error occurred while fetching the book
 */