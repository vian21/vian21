import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-green-300 content-center flex p-5 relative">
      <div className="absolute top-0 right-0">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/About">
          About
        </Link>
        <Link className="nav-link" to="/Projects">
          Projects
        </Link>
        <Link className="nav-link" to="/CV">
          CV
        </Link>
        <Link className="nav-link" to="/Contacts">
          Contact Me
        </Link>
        <a className="nav-link" href="/shell">
          Terminal
        </a>
        <button className="nav-link">Dark Mode</button>
      </div>
    </div>
  );
}
