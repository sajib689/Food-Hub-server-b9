# FoodHub Server

This is the server-side application for the FoodHub website, which facilitates the backend operations for the food sharing platform.

## Features

- User Authentication and Authorization
- Manage Food Listings
- Search and Filter Food Listings
- User Reviews and Ratings
- Notifications for New Listings

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for Authentication
- Mongoose for MongoDB Object Modeling

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/foodhub-server.git
    cd foodhub-server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Auth

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user

### Food Listings

- **GET /api/foods**: Get all food listings
- **POST /api/foods**: Create a new food listing
- **GET /api/foods/:id**: Get a single food listing by ID
- **PUT /api/foods/:id**: Update a food listing by ID
- **DELETE /api/foods/:id**: Delete a food listing by ID

### Reviews

- **POST /api/reviews**: Create a new review
- **GET /api/reviews/food/:foodId**: Get reviews for a specific food listing

## Contribution

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
