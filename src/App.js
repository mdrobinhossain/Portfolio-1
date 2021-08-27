import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import './App.scss';


function App() {
  return (
    <div className="app">
     <Topbar />
     <div className="sections">
       <Intro />
       <Portfolio />

       <Works />

       <Testimonials />
     </div>

    </div>
  );
}

export default App;
