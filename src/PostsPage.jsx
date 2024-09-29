import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { ShowAnimals } from "./ShowAnimals";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {
  var firstName = "Felix";
  const [animals, setAnimals] = useState([]);
  const [isAnimalsShowVisible, setIsAnimalsShowVisible] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState({});

  const getAnimalsIndex = () => {
    console.log('Hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setAnimals(response.data);
    })
  }

  // const getAnimalsShow = () => {
  //   console.log('Hello');
  //   axios.get("http://localhost:3000/posts/1.json").then(response => {
  //     console.log(response.data);
  //     // setAnimals(response.data);
  //   })
  // }
  
  // const getAnimalsCreate = () => {
  //   console.log('Hello');
  //   axios.post("http://localhost:3000/posts.json", {
  //     title: "New",
  //     body: "New Body",
  //     image: "New Image",
  //   }).then(response => {
  //     console.log(response.data);
  //     // setAnimals(response.data);
  //   })
  // }

  // const getAnimalsUpdate = () => {
  //   console.log('Hello');
  //   axios.patch("http://localhost:3000/posts/1.json", {
  //     title: "",
  //     body: "",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02P-PBZlsvu0_CSIDU0_HcbbdzIZyWyP_NQ&s",
  //   }).then(response => {
  //     console.log(response.data);
  //     setAnimals(response.data);
  //   })
  // }

  // const getAnimalsDestroy = () => {
  //   console.log('Hello');
  //   axios.delete("http://localhost:3000/posts/13.json").then(response => {
  //     console.log(response.data);
  //     setAnimals(response.data);
  //   })
  // }

  const handleCreate = (params) => {
    console.log('handling create')
    axios.post("http://localhost:3000/posts.json", params).then(response =>{
      console.log(response.data);
      
      setAnimals([...animals, response.data]);
  })}



  const handleShow = (animal) => {
    setCurrentAnimal(animal);
    setIsAnimalsShowVisible(true);
  };

  const handleClose = () => {
    setIsAnimalsShowVisible(false);
  };
  
  useEffect(getAnimalsIndex, []);


  
  return (
    <main>
      {/* <button onClick={getAnimalsIndex}>Show All</button>
      <button onClick={getAnimalsShow}>Show 1</button>
      <button onClick={getAnimalsCreate}>Create 1</button>
      <button onClick={getAnimalsUpdate}>Update</button>
      <button onClick={getAnimalsDestroy}>Destroy</button> */}
      <PostsNew onCreate={handleCreate}/>
      <PostsIndex firstName={firstName} animals={animals} onShow={handleShow}/>;
      <Modal show={isAnimalsShowVisible} onClose={handleClose}>
        <ShowAnimals  currentAnimal={currentAnimal} />
      </Modal>
    </main>
  );
}
