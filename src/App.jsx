import Canvas from "./Canvas";
import Custmizer from "./Pages/Custmizer";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <Custmizer />
        <Canvas />
      </main>
    </>
  );
}

export default App;
