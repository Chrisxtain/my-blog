import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ id, title, summary }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-6 transition-all">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{summary}</p>
      <Link to={`/Post/${id}`} className="mt-4 inline-block text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
}

export default BlogPost;
