import React, { useState, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';

function Card() {
    const [cars, setCars] = useState([]);
    const [images, setImages] = useState([]);   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCarData();
        fetchImageData();
    }, []);

    const fetchCarData = async () => {
        try {
            const response = await fetch('http://localhost:3000/car/newcar');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCars(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    const fetchImageData = async () => {
        try {
            const response = await fetch('http://localhost:3000/image');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    };

    return (
        <>
            <div>
                <h1 className='font-semibold text-2xl my-5 justify-center flex'>New Cars</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='flex justify-center gap-2'>
                        <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            {cars.map((car) => {
                                const carImage = images.find((image) => image.carId === car.id);

                                return (
                                    <NavLink key={car.id} to={`http://localhost:5173/singlepage/${car.id}`}>
                                        <div className="max-w-sm rounded h transition-all overflow-hidden shadow-md p-6 mb-6">
                                            <img className="w-full" src={carImage ? carImage.imageUrl : 'placeholder-image-url'} alt={`${car.year} ${car.make} ${car.model}`} />
                                            <div className="px-6 py-4 flex flex-col gap-2">
                                                <div className="font-bold text-xl flex justify-between">
                                                    {car.make} {car.model}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </div>
                                                <div><p className='mb-2 mt-0 font-semibold text-base'>{car.year}</p></div>
                                                <div className='flex justify-between font-semibold'>
                                                    <p className='font-semibold'>Mileage : {car.mileage}KM  </p>
                                                    <p className='hover:text-green-600 text-base'> ₹{car.price} </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='  font-semibold text-base'>Fuel type :</p>
                                                    <p className="font-medium text-base"> {car.fuel_type}</p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='  font-semibold text-base'>Transmission Type :</p>
                                                    <p className="font-medium text-base"> {car.transmission_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Card