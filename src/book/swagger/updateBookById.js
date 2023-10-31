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
 *         description: The unique identifier of the book to updated.
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               summary:
 *                 type: string
 *               isbn:
 *                 type: string
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