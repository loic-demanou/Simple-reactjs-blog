import BlogList from "./BlogList";
import loader from './Fidget-spinner.gif'
import useFetch from "./useFetch";

// let name = 'Loic';

const Home = () => {

    // le bloc devient reusable a chaque fois on use seulement la ligne ci en dessous pour faire un fetchAll
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs?_sort=id&_order=desc');

    return ( 
        <div className="home">
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