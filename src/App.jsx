import "./styles.css";
import FirstComponent from "./container/FirstList";

export default function App() {
  const titleH1 = <h1 className="title">ReactJSX</h1>;
  return (
    <>
      <div className="App">{titleH1}</div>
      <FirstComponent />
    </>
  );
}
