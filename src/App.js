
import './App.css';
import Header from './components/Header';
import Divider from "@mui/material/Divider";
import Logo from './components/Logo';
import Features from './Features';



function App() {
  return (
    <div className="App">
      <Header />
      <Divider sx={{ marginTop: "20px" }} />
      
      <Logo />
      <Features/>
    </div>
  );
}

export default App;
