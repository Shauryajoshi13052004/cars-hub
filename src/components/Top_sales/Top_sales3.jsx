import React from 'react'
// function changeColor(){
// const a=document.getElementById("svgheart");
// // a.style.fill="red";
// // a.style.color="red";
// if(a.style.fill=== "red"){
//     a.style.fill==="white";

// }
// else{
//     a.style.fill ==="red";
// }
// }

let isRed = false;

function changeColor() {
    const heartButton = document.getElementById('svgheart');

    if (isRed) {
        heartButton.style.fill = 'white';
        heartButton.style.color = 'black';

    } else {
        heartButton.style.fill = 'red';
        heartButton.style.color = 'red';

    }

    isRed = !isRed;

}


function Card(){
    return (

            <div className='grid gap-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-col-3 sm:grid-col-2 grid-col-2'>
            <div className="max-w-sm rounded hover:shadow-md  p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-6 bg-white">
            <img className="w-full" src='public/images/images/cars/ford/42 (3).webp' alt="2016 Volkswagen Ameo" />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 flex justify-between" >2016 Volkswagen Ameo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="svgheart" className="w-6 h-6" onClick={changeColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div><p>HIGHLINE1.2L • Manual</p></div>
                <div> <p>28,464 KM • 1ST OWNER • PETROL • MH-04</p></div>
                <div className='flex justify-between font-semibold'> <p className='font-semibold'>₹9,814/month </p> <p> ₹5,02,000 </p></div>
                <div> <p>Zero down payment</p></div>
                <div className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                    Rupa Renaissance, Navi Mumbai</div>
            </div>
            </div>
            </div>
    
       
    )
}

export default Card
