import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import loader from './Fidget-spinner.gif'
import axios from "axios";


const BlogDetail = () => {
    
    const {id} = useParams();
    const { data:blog, isLoading, error } = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory()

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+id, {
            method: "DELETE"
        })
        .then((result)=>{
            console.log("deleted sucessfully")
            history.push('/');
        })
    }

    return ( 
        <div>
            {/* qskdqs */}
            {isLoading && <p><img src={loader} alt="load" height="40px" width="40px" /> Chargement....</p>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre">{blog.title}</h2>
                    <small className="blog-publication-date">{`Publier le: ${blog.date}`}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">Publier par: {blog.author}</p>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            ) }
        </div>
     );
}
 
export default BlogDetail;