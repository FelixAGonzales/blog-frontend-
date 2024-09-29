import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/posts/new">New Posts</Link> | <Link to="/posts">List of Posts</Link> | <LogoutLink />
    </header>
  );
}
