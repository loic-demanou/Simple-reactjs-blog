import { Link } from "react-router-dom";

// import logo from './logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-block">
            {/* <img src={logo} alt="logo" /> */}
                <Link to="/" className="logo">Loic Blog</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Accueil</Link>    
                </li>
                <li>
                    <Link to="/create" className="lien buttonArticle">Créer Article</Link>    
                </li>    
                
            </ul>            
        </nav>
    );
}

export default Navbar;