import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Post One', content: 'This is the full content of the first post.' },
  { id: 2, title: 'Post Two', content: 'This is the full content of the second post.' },
  { id: 3, title: 'Post Three', content: 'This is the full content of the third post.' },
];

function PostDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export default PostDetails;
