import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPost] = useState([
    {
      id:1,
      title: "Title 01",
      body: "Body 01"
    },
    {
      id:2,
      title: "Title 02",
      body: "Body 02"
    },
    {
      id:3,
      title: "Title 03",
      body: "Body 03"
    }
  ])

  return (
    <div className="App">
      {
        posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
