export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>Animal Posts</h1>
      {props.animals.map(animals => (
        <div key={animals.id} className="animals">
          <h2>{animals.name}</h2>
          <p>Description: {animals.description}</p>
          <img src={animals.image_url} alt="" />
        </div>

      ))}

    </div>
  );
}
