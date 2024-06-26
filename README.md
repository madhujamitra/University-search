# University Search App

This is a [Next.js](https://nextjs.org/) project created to retrieve and display data from the Universities API. The app includes a search page and a favourites page with various features.

## Getting Started

### Prerequisites

Ensure you have Docker installed on your machine. You can download Docker from [here](https://www.docker.com/products/docker-desktop).

### Running the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/madhujamitra/University-search.git
  

2. **Build and Run the Docker Container**

   ```bash
   docker-compose up --build

This command will build the Docker images and start the containers for both the frontend and backend services. The frontend application will be available at http://localhost:3000, and the backend will be exposed on port 4000.

3. **Stop the Docker Container running**
   
   ```bash
   docker-compose down

### Development
To run the development server outside of Docker:

**Frontend Development Server**

1. Navigate to the Frontend Directory

  ```bash
  cd universities-app

2. Install Dependencies

    ```bash 
    npm install

3. Run the Development Server
     ```bash
     npm run dev

Open http://localhost:3000 with your browser to see the frontend application.

**Backend Development Server**

1. Navigate to the Brontend Directory

  ```bash
  cd universities-backend

2. Install Dependencies

    ```bash 
    npm install

3. Run the Development Server
     ```bash
     npm start

The backend server will be running on http://localhost:4000.

### Features
1. Landing page
2. Search page
3. Favourites Page

### Technologies Used
1. Next.js
2. Tailwind CSS
3. React-Select
4. Jest (for testing)
5. Docker

### Additional Information

***Running Tests***
To run tests, use:
   ```bash
   npm test
