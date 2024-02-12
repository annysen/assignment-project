import "./App.css";
import Cards from "./Components/Cards/Cards";

function App(props) {
  // console.log(props.userId);
  return (
    <>
      <Cards userId={props.userId} />
    </>
  );
}

export default App;
