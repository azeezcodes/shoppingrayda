
import './App.css';
import Header from './components/Header';
import Divider from "@mui/material/Divider";
import Logo from './components/Logo';
import Features from './Features';



function App() {
  return (
     <div className="App p-10">
        <Header />
        <Divider sx={{ marginTop: "20px" }} />

        <Logo />
        <div className="drop-shadow-lg border border-[#EAECF0] p-10 rounded-md h-fit mt-8">
           <p className="font-semibold text-[18px]">Featured Items</p>

           <Divider sx={{ marginTop: "26px", marginBottom: "24px" }} />

           <div>
              {" "}
              <Features />
           </div>
        </div>
     </div>
  );
}

export default App;

