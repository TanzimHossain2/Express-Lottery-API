
# Lottery API

This is a Node. js-based Lottery API that allows users to participate in lotteries. The API provides the following functionalities:

- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all tickets
- Get a ticket by ID
- Bulk buy (users can buy multiple tickets at a time)
- Raffle draw

## Ticket Model:

Each ticket has the following properties:

- number (unique)
- username
- price
- timestamp

## Routes:

- **GET** `/tickets/t/:ticketId`: Find a single ticket by ID
- **PATCH** `/tickets/t/:ticketId`: Update a ticket by ID
- **DELETE** `/tickets/t/:ticketId`: Delete a ticket by ID

- **GET** `/tickets/u/:username`: Find tickets for a given user
- **PATCH** `/tickets/u/:username`: Update tickets for a given user
- **DELETE** `/tickets/u/:username`: Delete all tickets for a given user

- **POST** `/tickets/sell`: Create new tickets
- **POST** `/tickets/bulk`: Bulk sell tickets
- **POST** `/tickets/draw`: Perform the raffle draw
- **GET** `/tickets/`: Find all tickets

## Environment Variables:

The API uses the following environment variable:

- `PORT`: The port on which the server will run. Defaults to `4444` if not provided.

## Database:

This API uses an in-memory database implemented with classes.

## Usage:

1. Clone the repository:
   ```
   git clone https://github.com/TanzimHossain2/Express-Lottery-API.git
   ```
2. Navigate to the project directory:
   ```
   cd Express-Lottery-API
   ```
3. Create a `.env` file in the root directory and set the `PORT` environment variable.
4. Install dependencies using `yarn`:
   ```
   yarn install
   ```
   or
   ```
   npm install
   ```
6. Start the server in production mode using:
   ```
   yarn start
   ```
   or in development mode using:
   ```
   yarn dev
   ```

Make sure to set up any necessary dependencies and configurations before running the API.

```
