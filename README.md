# Rental-Car 🚗

A full-stack car rental web application built with the MERN stack. The project provides a platform for users to explore available cars and interact with a car rental service through a web interface.

## Live Demo

- **Frontend:** [View Live Website](https://car-rental-zeta-tawny.vercel.app/)
- **Backend:** Deployed on Vercel

## Tech Stack

**Frontend**
- React.js
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Deployment & Tools**
- Git and GitHub
- Vercel
- GitHub Actions (CI/CD learning and workflow automation)

## Project Structure

```text
Rental-Car/
├── Client/       # React frontend
├── server/       # Node.js and Express backend
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB or a MongoDB Atlas connection
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/MdAasif06/Rental-Car.git
cd Rental-Car
```

### 2. Set Up the Frontend

```bash
cd Client
npm install
npm run dev
```

### 3. Set Up the Backend

Open a separate terminal:

```bash
cd server
npm install
```

Configure the required environment variables, then run the backend using the start script defined in `server/package.json`, for example:

```bash
npm start
```

> The exact commands may vary depending on the scripts configured in each `package.json`.

## Environment Variables

Create a `.env` file in the appropriate directory and add the environment variables required by your application.

For example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Use the actual variable names expected by your code. Never commit database credentials, API keys, or other secrets to GitHub.

## Deployment

The project is hosted on Vercel, with the frontend and backend deployed separately.

The frontend is connected to the live website linked above. Deployment settings and environment variables should be configured in the relevant Vercel project.

## GitHub Actions

GitHub Actions can be used to automate CI tasks, such as:

- Running frontend build checks.
- Checking backend code.
- Detecting errors before merging changes.

The existing Vercel GitHub integration handles automatic deployments.

## Future Improvements

- Add automated tests for frontend and backend.
- Improve error handling and validation.
- Strengthen authentication and security.
- Expand CI/CD automation using GitHub Actions.

## Contributing

Suggestions and improvements are welcome. Feel free to fork the repository and create a pull request.

## Author

**MD Aasif**

- GitHub: [@MdAasif06](https://github.com/MdAasif06)
