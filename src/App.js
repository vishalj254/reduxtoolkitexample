import "./App.css";
import Users from "./pages/Users";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Users />
      </header>
      <Footer />
    </div>
  );
}

export default App;
