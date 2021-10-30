
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Slider from './pages/Slider/Slider';
import HomeServices from './pages/Services/HomeServices/HomeServices';
import Expeience from './pages/Home/Experience/Expeience';
import AllServices from './pages/Services/AllServices/AllServices';
import Login from './pages/Login/Login';
import AllBooks from './pages/Manages/AllBooks/AllBooks';
import AddService from './pages/Manages/AddService/AddService';
import MyBooks from './pages/Manages/MyBooks/MyBooks';
import BookService from './pages/Services/BookService/BookService';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Route exact path="/">
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Expeience></Expeience>
          </Route>
          <Route path="/home">
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Expeience></Expeience>
          </Route>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/allbookings">
            <AllBooks></AllBooks>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/mybooking">
            <MyBooks></MyBooks>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <BookService></BookService>
          </PrivateRoute>
          <Route path="*">

          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
