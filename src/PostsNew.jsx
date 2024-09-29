// import axios from "axios";

export function PostsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);

    // axios.post("http://localhost:3000/posts.json", params).then(response =>{
    // console.log(response.data);
    props.onCreate(params, () => event.target.rest());
    event.target.reset();
  // })
    // console.log('handling submit');
}

  return (
    <div id="posts-new">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <br />
        <div>
          <label htmlFor="body">Description:</label>
          <textarea id="body" name="body"></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
