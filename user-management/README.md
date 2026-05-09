# User Management System

This is a simple User Management web application where I built both the Frontend and the Backend. The app fetches a list of users from a local API and displays them in a modern, responsive grid layout with cool hover effects.

## 🚀 Features

- **Data Fetching:** Uses Next.js Server Components to fetch data from a local Node.js backend.
- **Responsive Design:** Fully responsive grid layout that works on mobile, tablet, and desktop.
- **Interactive UI:**
  - Animated gradient borders on hover.
  - Smooth card scaling and shadow transitions.
  - Conditional styling: Inactive users are shown with lower opacity.
- **Status Indicators:** Clear visual cues (🟢/🔴) for user status.

## 🛠️ Tech Stack

**Frontend:**

- Next.js (App Router)
- React
- Tailwind CSS (for styling and animations)

**Backend:**

- Node.js / Express (connected to `http://localhost:4000`)

## 🏁 Getting Started

### 1. Prerequisites

- Make sure you have Node.js installed.

### 2. Backend Setup

- Navigate to your backend folder.
- Install dependencies: `npm install`
- Start the backend server: `npm run dev` (Ensure it runs on port 4000).

### 3. Frontend Setup

- Navigate to the `user-management` folder.
- Install dependencies:
  ```bash
  npm install
  ```
- Run the development server:
  ```bash
  npm run dev
  ```
- Open http://localhost:3000/users in your browser.

## 💡 What I Learned

While making this project, I practiced:

- How to connect a Next.js frontend to a custom Node.js API.
- Using Tailwind CSS groups and arbitrary values (like `p-[2px]`) for complex hover animations.
- Handling conditional rendering based on API data (like the `isActive` state).
