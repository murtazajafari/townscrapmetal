import './App.css';

// test town14

import ScrollToTop from './Components/ScrollToTop';
import Intro from './Components/Intro';
import Services from './Components/Services';
import Call from './Components/Call';
import About from './Components/About';
import Photos from './Components/Photos';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    

    return (
        <div className="App">
            <ScrollToTop />
            <div className="hero pb40">
                <Call />
                <Intro />
                <Services />
                
            </div>
            
            <About/>
            <Photos/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
