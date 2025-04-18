# AI-Powered Video Summarization Platform

## Overview

This project enables users to upload and stream videos while leveraging OpenAI to generate summaries, captions, or highlights.

## Getting Started

### Prerequisites

- Node.js (for frontend)
- Java 17+ (for backend)
- PostgreSQL (for database)

### Frontend Setup (Vite + React Router)

1. Navigate to the frontend directory:
   ```sh
   cd frontend/ai-video-summary
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http:localhost:5173` in your browser.

### Backend Setup (Spring Boot + PostgreSQL)

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Configure PostgreSQL database settings in `application.properties`.
3. Build and run the backend:
   ```sh
   ./mvnw spring-boot:run
   ```
4. The backend API will be available at `http:ocalhost:8080`.

## Folder Structure

- `frontend/` - React frontend with Vite and React Router.
- `backend/` - Spring Boot backend with PostgreSQL.
- `README.md` - Documentation and setup guide.
