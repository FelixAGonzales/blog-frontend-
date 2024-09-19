import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {
  var firstName = "Felix";
  var [animals, setAnimals] = useState([]);

  const getAnimalsData = () => {
    console.log('Hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setAnimals(response.data);
    })
  }

useEffect(getAnimalsData, [])

  // var animals = [
  //   {
  //     id: 1,
  //     name: "Schnauzer",
  //     description: "A Schnauzer is a dog breed type that originated in Germany from the 14th to 16th centuries. The term comes from the German word for 'snout' and means colloquially 'moustache', or 'hiskered snout', because of the dog's distinctively bearded snout. Initially it was called Wire-Haired Pinscher, while Schnauzer was adopted in 1879.",
  //     image_url: "https://www.valleywestvets.com/sites/default/files/styles/large/public/miniature-schnauzer-dog-breed-infp.jpg?itok=Xp9-cYU2",
  //   },
  //   {
  //     id: 2,
  //     name: "Green Cheeked Conure",
  //     description: "The green-cheeked parakeet (Pyrrhura molinae), also sometimes known as the green-cheeked conure in aviculture, is a species of bird in subfamily Arinae of the family Psittacidae, the African and New World parrots. It is found in Argentina, Bolivia, Brazil, and Paraguay.",
  //     image_url: "https://www.parrotmonk.com/wp-content/uploads/2012/05/IMG_0400.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "The Orange Cat",
  //     description: "A tabby cat, or simply tabby, is any domestic cat (Felis catus) with a distinctive M-shaped marking on its forehead, stripes by its eyes and across its cheeks, along its back, around its legs and tail, and characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body: neck, shoulders, sides, flanks, chest, and abdomen. The four known distinct patterns, each having a sound genetic explanation, are the mackerel, classic or blotched, ticked, and spotted tabby patterns.",
  //     image_url: "https://images.squarespace-cdn.com/content/v1/5452d441e4b0c188b51fef1a/1615326541809-TW01PVTOJ4PXQUXVRLHI/male-orange-tabby-cat.jpg",
  //   },
  // ];


  return (
    <main>
      <PostsNew />
      {/* <PostsIndex /> */}
      <PostsIndex firstName={firstName} animals={animals} />;
      <button onClick={getAnimalsData}>Get the data</button>
    </main>
  );
}
