import React from "react";
import blogData from "../data/blog";

function About({ image, about }) {
    const imageLink = image || "https://via.placeholder.com/215";
return(
<aside>
<img src={imageLink} alt="blog logo"/>
<p>{about}</p>
</aside>
);
}
export default About;