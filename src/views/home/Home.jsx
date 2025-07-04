import React, { useState } from 'react';
import HeroSection from './components/HeroSection';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('1');

  const featuredCars = [
    {
      id: 1,
      name: 'Toyota Sports Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    },
    {
      id: 2,
      name: 'Bmw E46 Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    },
    {
      id: 3,
      name: 'Mercedes Benz Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    },
    {
      id: 4,
      name: 'Audi R8 Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    },
    {
      id: 5,
      name: 'Ferrari 458 Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    },
    {
      id: 6,
      name: 'Mercedes Suv Car',
      image: 'assets/img/slider/hero-1.jpg',
      price: '$390',
      priceUnit: '/ month',
      rating: '5.0',
      year: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic'
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <HeroSection />
    <main className="main">
      

      {/* car area */}
      <div className="car-area bg py-120">
        <div className="container">
          <div className="col-md-12 mb-4">
            <div className="car-sort">
              <div className="car-widget p-0 m-0">
                <div className="car-search-form">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="submit"><i className="far fa-search"></i></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="car-sort-box">
                <select 
                  className="form-select"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="1">Sort By Default</option>
                  <option value="5">Sort By Featured</option>
                  <option value="2">Sort By Latest</option>
                  <option value="3">Sort By Low Price</option>
                  <option value="4">Sort By High Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {featuredCars.map((car) => (
              <div key={car.id} className="col-lg-6 col-xl-4">
                <div className="car-item">
                  <div className="car-img">
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4><a href="#">{car.name}</a></h4>
                      <span><i className="fas fa-star"></i> {car.rating}</span>
                    </div>
                    <ul className="car-list">
                      <li><i className="far fa-car"></i>Model: {car.year}</li>
                      <li><i className="far fa-user-tie"></i>{car.people}</li>
                      <li><i className="far fa-gas-pump"></i>{car.fuel}</li>
                      <li><i className="far fa-road"></i>{car.efficiency}</li>
                      <li><i className="far fa-steering-wheel"></i>{car.transmission}</li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">{car.price} <sub>{car.priceUnit}</sub></span>
                      <a href="#" className="car-favorite-btn"><i className="far fa-heart"></i></a>
                      <a href="#" className="theme-btn">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#" className="theme-btn">Load More <i className="far fa-arrow-rotate-right"></i> </a>
          </div>
        </div>
      </div>
      {/* car area end */}
    </main>
    </>
  );
};

export default Home;