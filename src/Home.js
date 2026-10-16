import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Luigi");
  };

  return (
    <div className="home">
      <h2>Home Page </h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
