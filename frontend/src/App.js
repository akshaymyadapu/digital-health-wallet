import Login from "./Login";
import Vitals from "./Vitals";
import Reports from "./Reports";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Digital Health Wallet</h2>
      <Login />
      <Vitals />
      <Reports />
    </div>
  );
}

export default App;
