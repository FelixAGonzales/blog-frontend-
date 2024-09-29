import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function PostsNewPage() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      // window.location.href = "/"
      navigate('/');
      
    })
  }
  
  // onClick vs onSubmit
  
  return (
    <div>
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