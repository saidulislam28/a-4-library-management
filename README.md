<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Book Management App - README</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 2rem; background-color: #f9f9f9; color: #333;">
  <h1> <strong>Book Management App</strong></h1>
  <p>A full-featured Book Management application built using <strong>React (Vite)</strong>, styled with <strong>Tailwind CSS</strong>, and powered by <strong>Redux Toolkit (RTK Query)</strong> for state and data handling. This project allows users to manage books, borrow them, and track borrow summaries — all in one sleek interface!</p>

  <hr>

  <h2> <strong>Tech Stack</strong></h2>
  <ul>
    <li> <strong>React (Vite)</strong></li>
    <li> <strong>Tailwind CSS</strong> – for modern responsive design</li>
    <li> <strong>React Router DOM</strong> – for smooth page navigation</li>
    <li> <strong>Redux Toolkit (RTK)</strong> – for scalable state management</li>
    <li> <strong>RTK Query</strong> – for efficient data fetching and CRUD operations</li>
  </ul>

  <hr>

  <h2> <strong>Core Features</strong></h2>

  <h3><strong>Landing Page (All Books)</strong></h3>
  <ul>
    <li>Displays a clean and responsive grid of <strong>all books</strong></li>
    <li>Each book shows basic info and action buttons</li>
  </ul>

  <h3> <strong>Add Book</strong></h3>
  <ul>
    <li>Easily add a new book via a <strong>form</strong></li>
    <li>Form includes fields like title, author, genre, ISBN, copies, etc.</li>
  </ul>

  <h3> <strong>Edit Book</strong></h3>
  <ul>
    <li>Update existing book info with a pre-filled form</li>
    <li>Makes managing your library a breeze</li>
  </ul>

  <h3> <strong>Delete Book</strong></h3>
  <ul>
    <li>Instantly delete any book from the system</li>
    <li>Includes confirmation for safe deletion</li>
  </ul>

  <h3> <strong>Book Details View</strong></h3>
  <ul>
    <li>Click the <strong>"Details"</strong> button to view complete book info</li>
    <li>A focused page with all book metadata shown</li>
  </ul>

  <h3> <strong>Borrow a Book</strong></h3>
  <ul>
    <li>User can <strong>borrow a book</strong> by entering:
      <ul>
        <li><strong>Quantity</strong></li>
        <li><strong>Due Date</strong></li>
      </ul>
    </li>
    <li>Simple and intuitive form right from the card</li>
  </ul>

  <h3> <strong>Borrow Summary Page</strong></h3>
  <ul>
    <li>See the <strong>total borrowed quantity</strong> for each book</li>
    <li>Helps track library usage efficiently</li>
  </ul>

  <hr>

  <h2> <strong>Navigation Bar</strong></h2>
  <ul>
    <li> <strong>All Books</strong> – View all listed books</li>
    <li> <strong>Add Books</strong> – Navigate to the book creation page</li>
    <li><strong>Borrow Summary</strong> – Check borrow statistics</li>
  </ul>

  <hr>

  <h2><strong>Project Highlights</strong></h2>
  <ul>
    <li><strong>Clean Codebase</strong> using Vite + modular folder structure</li>
    <li><strong>Reusable Components</strong> built with Tailwind for speed and style</li>
    <li><strong>Global State</strong> managed smoothly with Redux Toolkit</li>
    <li><strong>API Handling</strong> via RTK Query for all CRUD & borrow operations</li>
  </ul>

  <hr>

  <h2>📌 <strong>Setup Instructions</strong></h2>
  <pre style="background-color: #eee; padding: 1rem; border-radius: 6px;"><code># Clone the repo
git clone https://github.com/your-username/book-management-app.git

# Navigate to project
cd book-management-app

# Install dependencies
npm install

# Start the dev server
npm run dev</code></pre>

  <hr>

</body>
</html>
