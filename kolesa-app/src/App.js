import './App.css';
import Header from './Header'
import Nav from './Nav';
import Trending from './Trending-content';
import Brand from './filter-by-brand';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Trending />
      <div className='filter'>
        <Brand />
      </div>
      <Footer />
    </div>
  );
}

export default App;
