//client side routing using react-router-dom. routes for different pages and nested routes for the 
//private sections (createlisting, profile and update listing). The HEADER component is rendered across all pages.Features include
//authentication, profile management and listing creation and update.


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
// the App is the root component of the client-side using BrowserRouter to enable routing using the browser's history API
export default function App() {// components to render for the element prop when route is matched
  return (
  <BrowserRouter>
   <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
     < Route path='/search' element={<Search />} />
    <Route path='/listing/:listingId' element={<Listing />} />  

    <Route element={<PrivateRoute />}>
       <Route path="/profile" element={<Profile />} />
       <Route path='/create-listing' element={<CreateListing />} />
       <Route path= '/update-listing/:listingId'
      element={<UpdateListing />} 
      />  
      </Route>
    </Routes>
    </BrowserRouter>
  
);
}


