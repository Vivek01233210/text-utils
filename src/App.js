import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success')
      // document.title = "TextUtils - Light mode" // changing title when light mode is enabled.
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "#30353a";
      showAlert('Dark mode has been enabled', 'success')
      // document.title = "TextUtils - Dark mode"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text here:-" mode={mode} alertMessage={showAlert} />}/>
            <Route path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
