/**
 * @swagger
 * /book/{id}:
 *   put:
 *     summary: Update a book by ID
 *     description: Update a book record using its unique identifier.
 *     tags:
 *       - Book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The unique identifier of the book to update.
 *         type: string
 *       - name: bookData
 *         in: body
 *         required: true
 *         description: The book data to update the existing book.
 *         schema:
 *           $ref: '#/definitions/BookUpdate'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book updated
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
 *               message: An error occurred while updating the book
 */