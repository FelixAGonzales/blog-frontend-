import { useLoaderData } from 'react-router-dom'

export function PostsIndexPage() {
  const animals = useLoaderData();
  
  return (
    <div>
      <h1>Animal Posts</h1>
      <div className="posts-container">
      {animals.map(animals => (
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