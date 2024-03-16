// import { data } from 'autoprefixer';
import React from 'react'
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'bootstrap';
import { useThemeHook} from '../../globalcomponent/ThemeProvider';

function Singleproduct() {
    const [theme] = useThemeHook();

    const [car, setCars] = useState(null);
    
    const { id } = useParams(); // Get the carId from the URL params

    // Fetch car data based on carId
    // const [cars, setCars] = useState([]);
    const [images, setImages] = useState([]);   
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCarData();
        fetchImageData();
    }, [id]);

    const fetchCarData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/car/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCars(data);
            
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    const fetchImageData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/image/carImage/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    }; // Fetch data whenever carId changes  

    // Render loading if car data is not fetched yet
    if (!car) {
        return <p>Loading...</p>;
    }
console.log(images);
    return (

//         import React from 'react';

// const CarDetail = ({ carData }) => {
//   const { image, name, modelYear, features, description, gallery, specs } = carData;

//   return (
    <div className="car-detail-container">
      {/* Header section can be replaced with your existing header component */}
      <header>
        {/* Your company logo and navigation */}
      </header>

      {/* Hero Section */}
      <section className="hero">
      {images.length > 0 && (
                                <img src={images[0].imageUrl} alt="Main Image" />
                            )}      </section>

      {/* Car Details */}
      <section className="car-details">
        <h2>{car.make} - {car.year}</h2>
        <ul className="features">
          {/* {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))} */}
        </ul>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dicta.</p>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h3>Gallery</h3>
        <div className="gallery-images">
          {/* {gallery.map((image) => (
            <img src={image} alt={`${name} - Additional Image`} key={image} />
          ))} */}
           {images.length > 0 && (
                                <img src={images[1].imageUrl} alt="Main Image" />
                            )} {images.length > 0 && (
                                <img src={images[2].imageUrl} alt="Main Image" />
                            )} {images.length > 0 && (
                                <img src={images[3].imageUrl} alt="Main Image" />
                            )} {images.length > 0 && (
                                <img src={images[4].imageUrl} alt="Main Image" />
                            )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <button>Schedule a Test Drive</button>
      </section>

      {/* Additional Information */}
      <section className="additional-info">
        <h3>Specifications</h3>
        <Button 
                        onClick={()=>addItem(car)}
                        className={theme? 'bg-dark-primary text-black' : 'bg-light-primary'}
                        style={{borderRadius: '0', border: 0}}
                    >
                        {/* <BsCartPlus size="1.8rem"/> */}
                        Add to cart
                    </Button>
      </section>

    
    </div>
  );
};

// export default CarDetail;

       

export default Singleproduct





// <div>
// <div className="container">
//     <article className="card">
//         <div className="card-body">
//             <div className="row">
//                 <aside className="col-md-6">
//                     <article className="gallery-wrap">
//                         <div className="card img-big-wrap">
//                             {/* Display main image here */}
//                             {images.length > 0 && (
//                                 <img src={images[0].imageUrl} alt="Main Image" />
//                             )}
//                             </div>
//                             <div className="card img-big-wrap">
//                             {/* Display main image here */}
//                             {images.length > 0 && (
//                                 <img src={images[1].imageUrl} alt="Main Image" />
//                             )}
//                             </div>   <div className="card img-big-wrap">
//                             {/* Display main image here */}
//                             {images.length > 0 && (
//                                 <img src={images[2].imageUrl} alt="Main Image" />
//                             )}
//                             </div>   <div className="card img-big-wrap">
//                             {/* Display main image here */}
//                             {images.length > 0 && (
//                                 <img src={images[3].imageUrl} alt="Main Image" />
//                             )}
//                             </div>
//                             <div className="card img-big-wrap">
//                             {/* Display main image here */}
//                             {images.length > 0 && (
//                                 <img src={images[4].imageUrl} alt="Main Image" />
//                             )}
//                             </div> 
//                     </article>
//                 </aside>
//                 <main className="col-md-6">
//                     <article>
//                         <a href="#" className="text-primary btn-link">{car.model}</a>
//                         <h3 className="title">{car.make}</h3>
//                         {/* Display other details of the car */}
//                         <div>
//                             <ul className="rating-stars">
//                                 {/* Display rating stars here */}
//                             </ul>
//                             {/* Display other details like price, save for later, compare, etc. */}
//                         </div> 
//                         <hr />
//                         <div className="mb-3">
//                             <h6>Short description</h6>
//                             <ul className="list-dots mb-0">
//                                 {/* Display short description items here */}
//                             </ul>
//                         </div>
//                         {/* Display available sizes, price, and buy/add to cart buttons */}
//                     </article> 
//                 </main>
//             </div> 
//         </div> 
//     </article>
//     {/* Display parameters and features */}
// </div>
// </div>
// );
// }
