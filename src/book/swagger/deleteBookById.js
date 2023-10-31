/**
 * @swagger
 * /book/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     description: Delete a book record using its unique identifier.
 *     tags:
 *       - Book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The unique identifier of the book to delete.
 *         type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book deleted
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
 *               message: An error occurred while deleting the book
 */