import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';

export function PostsIndexPage() {
  const animals = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");
  
  return (
    <div>
      <h1>Animal Posts</h1>
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}/>
      <div className="posts-container">
      {animals.filter((animals) => animals.title.toLowerCase().includes(searchFilter.toLowerCase())).map(animals => (
        <div key={animals.id} className="animals">
          <h2>{animals.title}</h2>
          <p>Description: {animals.body}</p>
          <img src={animals.image} alt="" />
          <button type="info" onClick={() => (animals)}> More Info</button>
        </div>
      ))}
      </div> 
    </div>
  );
}