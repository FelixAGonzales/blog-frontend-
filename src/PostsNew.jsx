export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>Create New Post</h1>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body:</label>
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
