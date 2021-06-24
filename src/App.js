import "./App.css";
import Users from "./pages/Users";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Users />
      </header>
    </div>
  );
}

export default App;
