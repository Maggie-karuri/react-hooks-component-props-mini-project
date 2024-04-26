import React from "react";
import blogData from "../data/blog";


function Article( {title, date, minutes, preview }) {
    const defaultDate = date || "January 1, 1970";

    let emoji;
    if (minutes < 30) {
        // Calculate the number of coffee cup emojis based on readTime (rounded up to the nearest 5)
        const coffeeCups = Math.ceil(minutes / 5);
        emoji = '☕️'.repeat(coffeeCups);
      } else {
        // Calculate the number of bento box emojis based on readTime (rounded up to the nearest 10)
        const bentoBoxes = Math.ceil(minutes / 10);
        emoji = '🍱'.repeat(bentoBoxes);
      };
  return (  
    <article>
        <h3>{title}</h3>
        <small>{defaultDate} </small> 
        <p>{emoji} {minutes} minutes</p>

        <p>{preview}</p>
    </article>
);
}
export default Article;