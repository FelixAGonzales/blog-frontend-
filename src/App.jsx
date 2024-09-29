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
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;