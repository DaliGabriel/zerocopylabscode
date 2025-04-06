# Simple Developer Exercise 

The savvy cats over at SMART Pump would like to be able to allow users to login to their account, check their balance and update their personal details. Write a simple web application (API and UI) using node.js and lowdb that lets users accomplish those tasks. 

Feel free to use any other libraries or tool chains as long as the core code is javascript and node.js. npm (https://www.npmjs.org) is your friend - no need to recreate the wheel. 

You will find the base data file in `/data`

Wireframes: `assets/wireframes.png`

## Time limits
    

This exercise is meant showcase your creativity and talent in problem solving against a real world scenario. To that end it should not consume your every waking moment. We recommend at max spending 3 evenings of time on the exercise. 

## Requirements

* Login to the app via email and password
* Restrict access to valid a User
* Once logged in show the details of the user on the page
* Authorized users can check their account balance
* Allow the user to change their details
* lowdb (DB) -> https://github.com/typicode/lowdb
* node.js -> http://nodejs.org/ 

## Bonus Points

* Fully responsive UI
* Unit Tests of the API
* Functional Tests of the UI


## ✅ My Implementation

This submission includes:

- A Node.js + Express API (inside `/api`) using LowDB for persistence
- A Next.js + React client app (inside `/client/smart-pump-client`)
- Simple login flow and session handling
- Protected routes and user data updates
- Unit and UI tests

---

## 🛠 Tech Stack

- Backend: Node.js, Express, LowDB
- Frontend: Next.js, React
- Testing: Jest, React Testing Library

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/DaliGabriel/zerocopylabscode.git
cd zerocopylabscode
```

### 2. Install dependencies

#### API
```bash
cd api
npm install
```

#### Client
```bash
cd ../client/smart-pump-client
npm install
```

### 3. Run the API server

```bash
cd ../../api
npm start
```

> API runs at `http://localhost:4000`

### 4. Run the client app

```bash
cd ../client/smart-pump-client
npm run dev
```

> App runs at `http://localhost:3000`

---

## 🧪 Running Tests

### API Tests

```bash
cd api
npm test
```

### UI Tests

```bash
cd ../client/smart-pump-client
npm test
```