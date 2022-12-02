import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroPage from './components/HeroPage/HeroPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import TopSellingPage from './components/TopSellingPage/TopSellingPage';
import BookATripPage from './components/BookATripPage/BookATripPage';
import ReviewPage from './components/ReviewPage/ReviewPage';
import SponsorsPage from './components/SponsorsPage/SponsorsPage';
import SubscribePage from './components/SubscribePage/SubscribePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Navbar></Navbar> 
        <HeroPage></HeroPage>
        <ServicesPage></ServicesPage> 
        <TopSellingPage></TopSellingPage> 
        <BookATripPage></BookATripPage> 
        <ReviewPage></ReviewPage> 
        <SponsorsPage></SponsorsPage> 
        <SubscribePage></SubscribePage>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
