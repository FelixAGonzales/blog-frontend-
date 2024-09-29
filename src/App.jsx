// import { Footer } from "./Footer";
// import { Header } from "./Header";
// import { PostsPage } from "./PostsPage";
// import { SignupPage } from "./SignupPage";
// import { LoginPage } from "./LoginPage";


// function App() {
//   return (
//     <div>
//       <Header />
//       <SignupPage />
//       <LoginPage />
//       <PostsPage />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { PostsNewPage } from "./PostsNewPage";
import { PostsIndexPage } from "./PostsIndexPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import axios from "axios";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PostsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />,
      },
      {
        path: "/posts",
        element: <PostsIndexPage />,
        loader: () => axios.get("http://localhost:3000/posts.json").then(response => response.data)
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;