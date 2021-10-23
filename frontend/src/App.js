import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import AddWriter from './components/auth/AddWriter';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import HomeScreen from './components/blogs/home';
// import FavouritesScreen from './components/blogs/Favourites';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/add-writer' component={AddWriter} exact/>
          {/* <Route path='/discover/popular' component={HomeScreen} exact/>
          <Route path='/discover/latest' component={HomeScreen} exact/>
          <Route path='/discover/favourites' component={FavouritesScreen} exact/> */}
        </Container>
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
