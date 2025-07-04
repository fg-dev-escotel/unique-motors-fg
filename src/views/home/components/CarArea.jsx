import React from 'react';

const CarArea = () => {
  const featuredCars = [
    {
      id: 1,
      name: 'Toyota Sports Car',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
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
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
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

  return (
    <div className="car-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Cars</span>
              <h2 className="site-title">Featured <span>Cars</span></h2>
              <div className="heading-divider"></div>
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
  );
};

export default CarArea;