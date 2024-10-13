export function PostsIndex(props) {
  
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>Animal Posts</h1>
      <div className="posts-container">
      {props.animals.map(animals => (
        <div key={animals.id} className="animals">
          <h2>{animals.title}</h2>
          <p>Description: {animals.body}</p>
          <img src={animals.image} alt="" />
          <button type="info" onClick={() => props.onShow(animals)}> More Info</button>
        </div>
      ))}
      </div> 

    </div>
  );
}
