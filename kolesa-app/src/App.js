import './App.css';
import Header from './Header'
import Nav from './Nav';
import Trending from './TrendingContent';
import Footer from './Footer';

const styles = {
  container: {
    marginLeft: '3rem',
    marginRight: '3rem',
  },
  header_wrapper: {
    backgroundColor: '#ffffff',
  },
  header: {
    marginLeft: '3rem',
    marginRight: '3rem'
  },
  bg: {
    backgroundColor: '#eee',
  }
}

function App() {
  return (
    <div className="App" style={styles.bg}>
      <div className='header_wrapper' style={styles.header_wrapper}>
        <header style={styles.header}>
          <Header />
        </header>
      </div>
      
      <div className='container' style={styles.container}>  
        <nav>
          <Nav />
        </nav>
        <main>
          <Trending />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
