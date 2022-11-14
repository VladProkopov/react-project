import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="nav">
        <ul className="navbar">
            <li><Link to="/plant/">Plant pots</Link></li>
            <li><Link to="/ceramics/">Ceramics</Link></li>
            <li><Link to="/tables/">Tables</Link></li>
            <li><Link to="/chairs/">Chairs</Link></li>
            <li><Link to="/crockery/">Crockery</Link></li>
            <li><Link to="/tableware/">Tableware</Link></li>
            <li><Link to="/cutlery/">Cutlery</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;