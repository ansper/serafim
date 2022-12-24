import React from 'react'
import About from './components/About';
import Children from './components/Children';
import Footer from './components/Footer';
import Fund from './components/Fund';
import Header from "./components/Header"
import News from './components/News';
import Video from './components/Video';


function App() {

  return (
    <div className="App">
      <Header />
      <Fund />
      <News />
      <Children />
      <About />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
