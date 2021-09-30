import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();

    let [isLoading, setIsLoading] = useState(false)
    // const created = toast.success("Wow so easy!");

    const submitForm =(e) =>{
        e.preventDefault();
        let tmpdate = new Date().toISOString().split('T');
        let date = `${tmpdate[0]} ${tmpdate[1]}`
        const blog= {title, author, body, date}
        setIsLoading(true)

        axios.post('http://localhost:8000/blogs', blog)
        .then((result) => {
            console.log('ajouté avec sucess');
            toast.success("Posté avec success! 🙃");

            console.log(result);
            setIsLoading(false)
            // setTitle('');
            // setBody('');
            // setAuthor('')
            history.push('/');
        })
        console.log(blog);
    }

    return ( 
        <div className="create">
            {/* {success && <div className="flash">{created}</div>} */}
            <h2>Ajouter un nouvel article</h2>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input type="text" id="title" className="form-control" required value={title} onChange={ (e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Auteur</label>
                    <select id="author" className="form-control" required value={author} onChange={ (e)=> setAuthor(e.target.value)}>
                        <option value="" ></option>
                        <option value="Demanou">Demanou</option>
                        <option value="Loic">Loic</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea cols="90" rows="30" id="description" className="form-control" required
                    value={body} onChange={ (e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    { !isLoading &&<button type="submit" className="btn btn-primary">Poster</button>}
                    { isLoading &&<button type="submit" disabled className="btn btn-primary">Post ...</button>}
                </div>
                {/* <p>title: {title}</p>
                <p>author: {author}</p>
                <p>desc: {body}</p> */}
            </form>
        </div>
     );
}
 
export default Create;