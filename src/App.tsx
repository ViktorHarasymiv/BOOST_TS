import "./App.css";
import Blended_first from "./components/Blended/Blended_first";
import Trening from "./components/Trening";

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Type Script boost trening</h1>
      <ul>
        <li>
          <Trening />
        </li>
      </ul>
      <Blended_first />
    </>
  );
}
