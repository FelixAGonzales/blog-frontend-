import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  var firstName = "Felix";
  var animals = [
    {
      id: 1,
      name: "Schnauzer",
      description: "A Schnauzer is a dog breed type that originated in Germany from the 14th to 16th centuries. The term comes from the German word for &quot;snout&quot; and means colloquially &quot;moustache&quot;, or &quot;whiskered snout&quot;, because of the dog's distinctively bearded snout. Initially it was called Wire-Haired Pinscher, while Schnauzer was adopted in 1879.",
      image_url: "https://www.valleywestvets.com/sites/default/files/styles/large/public/miniature-schnauzer-dog-breed-infp.jpg?itok=Xp9-cYU2",
    },
    {
      id: 2,
      name: "Green Cheeked Conure",
      description: "This is a green cheeked conure.",
      image_url: "https://www.parrotmonk.com/wp-content/uploads/2012/05/IMG_0400.jpg",
    },
    {
      id: 3,
      name: "The Orange Cat",
      description: "This is the orangest of the orange cats.",
      image_url: "https://images.squarespace-cdn.com/content/v1/5452d441e4b0c188b51fef1a/1615326541809-TW01PVTOJ4PXQUXVRLHI/male-orange-tabby-cat.jpg",
    },
  ];


  return (
    <main>
      <PostsNew />
      {/* <PostsIndex /> */}
      <PostsIndex firstName={firstName} animals={animals} />;
    </main>
  );
}
