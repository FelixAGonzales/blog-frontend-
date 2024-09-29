import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";


function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;