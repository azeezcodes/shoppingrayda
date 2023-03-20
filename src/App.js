
import './App.css';
import Header from './components/Header';
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider sx={{marginTop: "20px"}}/>
    </div>
  );
}

export default App;
