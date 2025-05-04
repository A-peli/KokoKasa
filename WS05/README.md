# FullStack 2025 Workshop 5 (WS05) - REST API

## Overview

This project is a RESTful API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. It manages a small sample collection of a few disc golf discs, where each disc has a name (`nimi`) and a manufacturer (`valmistaja`).

You can use this API to:
- View all discs
- View a single disc by ID
- Add a new disc
- Update an existing disc
- Delete a disc

## Setup Instructions

### Requirements
- Node.js
- MongoDB Atlas account (or local MongoDB)
- (POSTMAN or other API testing tool)

### Installation

1. Clone or download the project.
2. Navigate to the project folder in your terminal.
3. Run:

```bash
npm install
```
4. Start the server:
```bash
node app.js
```
The server will run at http://localhost:3000.

⚠️ MongoDB connection URI is now stored in a `.env` file for security. 
Create a `.env` file in the root of the project and add your MongoDB URI like this:

MONGODB_URI=your_mongodb_connection_string

##  Routes
All routes are prefixed with /api.

# GET /api/getall
Description: Returns all discs from the database.

Response:
```json
[
  {
    "_id": "64501e9a2392a9b13a93e57f",
    "nimi": "Destroyer",
    "valmistaja": "Innova"
  },
  ...
]
```
# GET /api/:id
Description: Returns a single disc by its MongoDB ID.

Response (200):
```json
{
  "_id": "64501e9a2392a9b13a93e57f",
  "nimi": "Buzzz",
  "valmistaja": "Discraft"
}
```
Error (404):
```json
{
  "message": "Item not found"
}

```
# POST /api/add
Description: Adds a new disc to the database.

Request Body:
```json
{
  "nimi": "Zone",
  "valmistaja": "Discraft"
}
```
Response (201):
```json
{
  "_id": "64501e9a2392a9b13a93e58a",
  "nimi": "Zone",
  "valmistaja": "Discraft"
}
```
Error (400):
```json
{
  "message": "Disc validation failed: nimi: Path `nimi` is required."
}
```

# PUT /api/update/:id
Description: Updates an existing disc by ID.

Request Body (example):
```json
{
  "nimi": "Zone OS",
  "valmistaja": "Discraft"
}
```
Response (200):

```json
{
  "_id": "64501e9a2392a9b13a93e58a",
  "nimi": "Zone OS",
  "valmistaja": "Discraft"
}
```
Error (404):
```json
{
  "message": "Item not found"
}
```
# DELETE /api/delete/:id
Description: Deletes a disc by ID.

Response (200):
```json
{
  "message": "Item deleted successfully"
}
```
Error (404):
```json
{
  "message": "Item not found"
}
```

## Error Handling
* The API returns appropriate HTTP status codes:
* 200 OK – Successful fetch, update, or delete.
* 201 Created – Successfully created a document.
* 400 Bad Request – Invalid request body or data.
* 404 Not Found – Document not found.
* 500 Internal Server Error – Server/database errors.

## Testing the API
Use Postman to test all routes. Make sure to:
* Use the correct HTTP methods (GET, POST, PUT, DELETE)
* Set Content-Type: application/json for POST and PUT requests
* Pass valid MongoDB _id strings for routes requiring :id

## Aapeli Huhtinen
This project was built as part of a REST API workshop to practice full-stack development with Express and MongoDB.