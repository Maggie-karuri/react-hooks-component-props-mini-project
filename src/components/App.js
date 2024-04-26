import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import ArticleList from "./ArticleList";
import About from "./About";
import Header from "./Header";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <Article title={blogData.title} date={blogData.date} minutes={blogData.minutes} preview={blogData.preview}/>
      <ArticleList posts={blogData.posts} />
     </div>
  );
}

export default App;
