export function ShowAnimals({currentAnimal}) {
  return (
    <div>
      <p>Title: {currentAnimal.title}</p>
      <p>Description: {currentAnimal.body}</p>
      <img src={currentAnimal.image} alt="" />
    </div>
)}