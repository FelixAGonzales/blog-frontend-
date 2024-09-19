export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>Animal Posts</h1>
      <div className="posts-container">
      {props.animals.map(animals => (
        <div key={animals.id} className="animals">
          <h2>{animals.title}</h2>
          <p>Body: {animals.body}</p>
          <img src={animals.image} alt="" />
        </div>
      ))}
      </div> 

    </div>
  );
}
