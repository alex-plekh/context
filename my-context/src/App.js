// import logo from './logo.svg';
import './App.css';
// import MyComponent from "./components/ContextClass/MyComponent";
import {MyComponents} from "./components/ContextFunction/MyComponent";
import ShowUsers from "./components/ContextFunction/UsersFunctionContext";

function App() {
  return (
    <div className="App">
        <MyComponents>
            <ShowUsers/>
        </MyComponents>
    </div>
  );
}

export default App;
