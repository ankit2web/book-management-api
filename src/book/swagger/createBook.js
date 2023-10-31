/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Upload a new book record to the database.
 *     tags:
 *       - Book
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
 *       201:
 *         description: Book uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book Uploaded
 *               id: <generated_id>
 *               title: <title>
 *               author: <author>
 *               summary: <summary>
 *               isbn: <isbn>
 *               createdAt: <timestamp>
 *               updatedAt: <timestamp>
 *       400:
 *         description: Book already exists
 *         content:
 *           application/json:
 *             example:
 *               message: Book Already exist
 *               id: <existing_id>
 *               title: <existing_title>
 *               author: <existing_author>
 *               summary: <existing_summary>
 *               isbn: <existing_isbn>
 */