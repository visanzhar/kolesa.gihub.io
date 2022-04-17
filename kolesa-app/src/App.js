import './App.css';
import Header from './Header'
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import React from 'react-bootstrap';

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
  const content = [
    { id: 1, title: 'car1', img: 'https://photos-kl.kcdn.kz/webp/da/da56e809-5966-4463-8e39-0179cbc3612e/1-120x90.jpg'},
    { id: 2, title: 'car2', img: 'https://photos-kl.kcdn.kz/webp/13/1392189e-fa5c-4083-8340-f62aee5e589b/1-120x90.jpg'},
    { id: 3, title: 'car3', img: 'https://photos-kl.kcdn.kz/webp/86/86a2a18a-78bd-4029-b634-4403ebaf974c/32-120x90.webp'},
    { id: 4, title: 'car4', img: 'https://photos-kl.kcdn.kz/webp/8b/8b72f8c2-a3bd-4cb4-8af8-d3a3656bffea/4-120x90.webp'},
    { id: 5, title: 'car5', img: 'https://photos-kl.kcdn.kz/webp/cc/cc92217d-3c57-4c03-86c6-561c3fc6521b/3-120x90.webp'},
    { id: 6, title: 'car5', img: 'https://photos-kl.kcdn.kz/webp/37/373a0385-43c4-4997-8e90-69d51023f5cf/7-120x90.webp'},
    { id: 7, title: 'car5', img: 'https://photos-kl.kcdn.kz/webp/de/decf0368-a918-41a6-ad5a-1416fd179e66/1-120x90.webp'},
    { id: 8, title: 'car5', img: 'https://photos-kl.kcdn.kz/webp/9b/9b30ca37-a521-4905-a70c-b5b4238d06c8/1-120x90.webp'},
    { id: 9, title: 'car5', img: 'https://photos-kl.kcdn.kz/webp/9b/9b30ca37-a521-4905-a70c-b5b4238d06c8/1-120x90.webp'},
  ]
  return (
    <div className="App" style={styles.bg}>
      <div className='header_wrapper' style={styles.header_wrapper}>
        <header style={styles.header}>
          <Header />
        </header>
      </div>
      
      <div className='container' style={styles.container}>  
        <nav>
          <Nav content={content}/>
        </nav>
        
        <main>
          <Content content={content}/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
