import './App.css';
import Headers from './component/Headers';
import SingleProduct from './component/SingleProduct';
import NavBar from './component/navbar';
import Categories from './component/Categories';
import About from './component/About';
import Footer from './component/Footer'
import Contact from './component/Contact';


function App() {
  return (
    <div>
      <NavBar />
      <Headers />
      <Categories />
      <About />
      <Contact />
      <Footer />
      {/* <SingleProduct /> */}
    </div>
  );
}

export default App;
