# Book Management API

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger
- JavaScript

## Features

- Create a new book record.
- Retrieve a list of all books.
- Retrieve a book by its unique identifier.
- Update an existing book record.
- Delete a book by its unique identifier.

## Getting Started

1. Clone the repository to your local machine.

   ```bash
   git clone https://www.github.com/ankit2web/book-management-api.git
   ```
2. Install the required dependencies.
    ```bash
    npm install
    ```
3. Start the server.
    ```bash
    npm start
    ```
    The server should be running on http://localhost:5000.

## API Endpoints

### Create a new book

- URL: /books
- Method: POST
- Description: Upload a new book record to the database.
- Request Body: JSON data containing book details (title, author, summary, isbn).
- Responses:
    - 201: Book uploaded successfully.
    - 400: Book already exists.

### Retrieve a list of all books
-  URL: /books
- Method: GET
- Description: Retrieve a list of all books from the database.
- Responses:
    - 200: A list of books retrieved successfully.
    - 500: Internal server error.

### Retrieve a book by ID
- URL: /book/:id
- Method: GET
- Description: Retrieve a book by its unique identifier.
- Parameters: id (string) - The unique identifier of the book to retrieve.
- Responses:
    - 200: Book retrieved successfully.
    - 404: Book not found.
    - 500: Internal server error.

### Update a book by ID
- URL: /book/:id
- Method: PUT
- Description: Update a book record using its unique identifier.
- Parameters: id (string) - The unique identifier of the book to update.
- Request Body: JSON data containing book details to update (title, author, summary, isbn).
- Responses:
    - 200: Book updated successfully.
    - 404: Book not found.
    - 500: Internal server error.

### Delete a book by ID
- URL: /book/:id
- Method: DELETE
- Description: Delete a book record using its unique identifier.
- Parameters: id (string) - The unique identifier of the book to delete.
- Responses:
    - 200: Book deleted successfully.
    - 404: Book not found.
    - 500: Internal server error.

## Documentation

The API is documented using Swagger. You can access the Swagger documentation by running the server and visiting the following URL:

```bash
http://localhost:5000/api-docs
```

## Deployment
This API will be deployed to AWS EC2 for production use.

Update: Deployed to t2.micro EC2 instance and is available at `http://3.85.132.65/api-docs`

## Contact Details

- Name: Ankit Pandey
- Email: ankit2web@outlook.com