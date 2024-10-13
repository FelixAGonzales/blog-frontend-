import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined ){
    authenticationLinks = (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
    )
  } else {
    authenticationLinks = (
      <>
      | <LogoutLink />
      </>
   )
    // console.log("I am logged in")
  }


  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/posts/new">New Posts</Link> | <Link to="/posts">List of Posts</Link>
      {authenticationLinks}
    </header>
  );
}
