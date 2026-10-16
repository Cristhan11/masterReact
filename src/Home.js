import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome party", body: "lorem ipsum ...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum ...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // function that runs when the component is first rendered and whenever the blogs state changes
  // run only when the component is first rendered
  // useEffect(() => {
  //   console.log("useEffect ran");
  //   console.log(blogs);
  // }, []);

  const [name, setName] = useState("mario");
  useEffect(() => {
    console.log("useEffect run");
    console.log(name);
  }, [name]);
  //only run when the name state changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
