import Header from'./components/Header';
import Hero from "./components/Hero";
import ContactForm from "./components/contactForm";
import Footer from './components/Footer';


const App = () => {
  const item = {
    name:'Tarek',
    age:23,
    city:'Dhaka'
  }
  return (
    <div>
      <Header />
      <Hero title="Pass data using props" item={item} />
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;