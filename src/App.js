import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";

function App() {
  let ascii = [];
  for (let i = 0; i <= 25; i++) {
    //알파벳개수26
    ascii[i] = String.fromCharCode(97 + i); //97=a...
  }

  const list = ascii.map((v) => <li>{v}</li>);
  // console.log("ascii :" + ascii);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {list}
      </header>

      {/* <Input /> */}
    </div>
  );
}

export default App;
