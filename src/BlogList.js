import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// ici on recupère la props quon a passé dans le composant enfant
const BlogList = (props) => {

    const blogs = props.list
    const title = props.title
    const [count, setCount] = useState(0);

    // const handleDelete = (id) => {
    //     axios.delete('http://localhost:8000/blogs/'+ id)
    //     .then((result) => {
    //         console.log('deleted sucessfully')
    //     })
    //     .catch((err) =>{
    //         console.log('there is an error')
    //     })
    // }

    // const handleDelete= props.handleDelete;

    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
            {/* <button onClick={()=> setCount(count +1)}>click {count}</button> */}
        {
            blogs.map((blog) => (
                    <div className="blog" key = {blog.id}>
                    <Link to={ `/blogs/${blog.id}` } className="blog-titre">{blog.title}</Link>
                    <small className="blog-publication-date">Publié le {blog.date}</small>
                    <p className="blog-author">Publié par {blog.author}</p>
                    {/* <button onClick= { () => handleDelete(blog.id) }>Delete</button> */}
                </div>
            ))
        }
    </div>

     );
}
 
export default BlogList;