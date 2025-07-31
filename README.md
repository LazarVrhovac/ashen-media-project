# Project Overview

Ashen is a modern social networking application developed as the creator’s first major project. The name "Ashen" begins with the letter A, chosen symbolically to represent a fresh beginning and ambition for this to be the first in a series of impactful applications.
The app's primary purpose is to connect users around the world through intuitive design, real-time interaction, and modern web technologies.
This project was developed as part of the final exam requirements at the CODE by Comtrade school.

## What the App Does

Ashen allows users to:

- Create and customize personal profiles

- Post content with images

- Like other users’ posts

- Manage their own content and interactions

- The focus is on delivering a smooth, fast, and clean user experience.

## Technologies Used

- React (with libraries such as react-dropzone, react-dom, etc.)

- TypeScript – for static typing and safer code

- AppWrite – for user authentication, database, storage, and backend logic

- TanStack Query (React Query) – for server-state management and data fetching

- Tailwind CSS – for utility-first and responsive styling

- ShadCN/UI – for clean, reusable UI components

- - Various additional helper libraries (e.g., Zod, Lucide Icons, Framer Motion...)

## Project Structure

```
ashen/
├── public/                # Static files (e.g. images, favicon)
├── src/                   # Main application source code
│   ├── _auth/             # Authentication logic (login, register, etc.)
│   ├── _root/             # Root layout and app structure
│   ├── components/        # Reusable UI components (buttons, cards, etc.)
│   ├── constants/         # Constants (routes, messages, config)
│   ├── context/           # React context providers (e.g. AuthContext)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and external services (Appwrite, validation, etc.)
│   └── types/             # Global TypeScript types and interfaces
```

## ▶️ How to Run the App

To run Ashen locally on your machine, follow these simple steps:

### 1. Clone the Repository
First, download (clone) the project using Git:
```bash
git clone https://github.com/your-username/ashen.git
cd ashen
```

### 2. Install Dependencies
Open your terminal (command line) inside the project folder and run:
```bash
npm install
```
> This will install all necessary packages used in the project.

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the required Appwrite configuration:

```env
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint.com/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
```

### 4. Start the Development Server
Once everything is set up, start the app with:
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to use the application.

## 🌐 Live Version

If the hosted version is online, you can access the app here:  
🔗 [https://ashenmedia.netlify.app/](https://ashenmedia.netlify.app/)

> ⚠️ **Note:** The live version may not always reflect the most recent updates available on GitHub.

## 🔧 Key Project Files

- `src/context/AuthContext.tsx` – Provides authentication state and methods (e.g. login, logout) via React Context to be used across the app.
- `src/lib/validation/utils.ts` – Contains utility functions for validating form inputs and user data before submission.
- `src/lib/appwrite/api.ts` – Defines API functions that interact with the Appwrite backend (e.g. fetching data, creating or deleting records).
- `src/lib/tanstack-query/queriesAndMutations.ts` – Centralizes all TanStack Query definitions — including data fetching (queries) and data-changing logic (mutations).

## Special Thanks

A special thank you to my mentor Igor Ostojić, whose guidance, knowledge, and support were essential throughout the development of this project.
