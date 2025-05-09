// src/App.js

import React from 'react';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import BlogPost from './components/BlogPost'; // Assuming you have a BlogPost component

function App() {
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Post/:id" element={<PostDetails />} /> {/* 👈 NEW */}
</Routes>

// Navbar
  return (
    <div className="min-h-screen bg-gray-100">
       <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">MyBlog</h1>
        <nav className="space-x-4">
          <a href="Home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="Profile" className="text-gray-700 hover:text-blue-500">Portfolio</a>
          <a href="Blogs" className="text-gray-700 hover:text-blue-500">Blogs</a>
          <a href="Login" className="text-gray-700 hover:text-blue-500">Login</a>
        </nav>
      </header> 

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogPost title="First Post" summary="Welcome to my new blog!" />
          <BlogPost title="Another Story" summary="Sharing thoughts on building this..." />
          <BlogPost title="React + Tailwind" summary="Learn how to build fast beautiful apps." />
        </div>
      </main>
    </div>
  );
}

// Reusable BlogPost component
// function BlogPost({ id, title, summary }) {
//   return (
//     <div className="bg-white rounded-lg shadow hover:shadow-lg p-6 transition-all">
//       <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
//       <p className="text-gray-600 mt-2">{summary}</p>
      
//       <Link 
//         to={`/post/${id}`} 
//         className="inline-block mt-4 text-blue-500 hover:underline"
//       >
//         Read More
//       </Link>
//     </div>
//   );
// }



export default App;
