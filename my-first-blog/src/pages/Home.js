import BlogPost from '../components/BlogPost';
import React from 'react';   
function Home() {
  const posts = [
    { id: 1, title: 'Post One', summary: 'This is the first post.' },
    { id: 2, title: 'Post Two', summary: 'This is the second post.' },
    { id: 3, title: 'Post Three', summary: 'This is the third post.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id} 
          title={post.title}
          summary={post.summary}
        />
      ))}
    </div>
  );
}

export default Home;
