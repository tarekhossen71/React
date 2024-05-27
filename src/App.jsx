import Header from'./components/Header';
import Hero from "./components/Hero";
import ContactForm from "./components/contactForm";
import Footer from './components/Footer';
import UseRef from './components/UseRef';
import Product from './components/Product';
import UseState from './components/UseState';


const App = () => {
  const item = {
    name:'Tarek',
    age:23,
    city:'Dhaka'
  }

  const buttonClick = ()=>{
    alert('Hi There!');
  }

  return (
    <div>
      {/* <Header btnClick={buttonClick} /> */}
      {/* <Hero title="Pass data using props" item={item} />
      <ContactForm/> */}
      {/* <Footer/> */}

      {/* <UseRef/> */}

      {/* <Product/> */}

      <UseState/>
    </div>
  );
};

export default App;