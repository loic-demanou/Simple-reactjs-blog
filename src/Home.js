import BlogList from "./BlogList";
import loader from './Fidget-spinner.gif'
import useFetch from "./useFetch";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// let name = 'Loic';
// toast.configure()
const Home = () => {
    // const notify = () => toast.success("Wow so easy!");

    // le bloc devient reusable a chaque fois on use seulement la ligne ci en dessous pour faire un fetchAll
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs?_sort=id&_order=desc');

    return ( 
        <div className="home">
            {/* <button className="btn btn-secondary" onClick={notify}>Notify!</button> */}
            {error && <div style= { { 'color':'red' } } >{error}</div>}
            {isLoading && <p><img src={loader} alt="load" height="40px" width="40px" /> Chargement....</p>}
            {/* ici on passe la props au component enfant */}
            {blogs && <BlogList list= {blogs} title = "Liste des blogs" />}
            {/* <button onClick={ () => { setName('Loic Demanou') }}>{name}</button> */}
            {/* <BlogList list= {blogs.filter((blog) => blog.author =="Jeannot" )} title = "Liste des blogs de Jeannot"/> */}
        </div>
    );
}
 
export default Home;