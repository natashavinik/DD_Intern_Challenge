# Drone Data Query Application

A web application that displays drone flight data and allows users to query the dataset using natural language. The application uses an Angular frontend to display data and accept user queries, while the backend is built with FastAPI and utilizes the OpenAI API for natural language processing (NLP).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Features

- Display drone flight data (e.g., timestamp, GPS coordinates, altitude, and battery level).
- Query the dataset using natural language (e.g., "What is the altitude of the second image?").
- Use OpenAI's GPT-3.5 to interpret user queries and retrieve relevant data.
- Responsive UI built with Angular Material.
- Backend built with FastAPI and Python.

## Tech Stack

- **Frontend**: Angular
- **Backend**: FastAPI, Python
- **AI Integration**: OpenAI GPT-3.5 (via OpenAI API)
- **Database**: JSON file for drone data storage (for demo purposes)
- **CSS Framework**: Angular Material

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **Angular CLI** (`npm install -g @angular/cli`)
- **Python 3.9+**
- **Pip** (Python package manager)
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/drone-data-app.git
   cd drone-data-app
   ```

2. **Frontend Setup (Angular):**
   Navigate to the frontend directory and install the dependencies:

   ```bash
   cd dd-intern-challenge
   npm install
   ```

   The frontend will be available at http://localhost:4200

3. **Backend Setup (FastApi)**
   Navigate to the backend directory, create a virtual environment, and install dependencies:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

   Run the FastAPI server:

   ```bash
   uvicorn main:app --reload
   ```

   The backend will be available at http://localhost:8000

4. **Set OpenAI API Key**
   Set your OpenAI API key as an environment variable:

   ```bash
   export OPENAI_API_KEY='your-openai-api-key'
   ```

   For Windows:

   ```bash
   set OPENAI_API_KEY='your-openai-api-key'
   ```

### Usage

1.  Start both the backend and frontend servers:

        Frontend: ng serve
        Backend: uvicorn main:app --reload

2.  Visit http://localhost:4200 to view the drone data and interact with the application.

3.  Type queries like "What is the altitude of the second image?" in the input box and click "Submit" to get an AI-generated response based on the drone dataset.

### Project Structure

```bash
drone-data-app/
├── dd-intern-challenge/     # Frontend (Angular) code
│   ├── src/
│   ├── angular.json
│   └── package.json
├── dataset.json             # JSON file with drone flight data
├── main.py                  # Backend (FastAPI) code
├── requirements.txt         # Backend dependencies
└── README.md                # Project README
```
