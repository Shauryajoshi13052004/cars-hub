import React from "react";


const Divider = () => {
  return (
    <div
      className="Breadcrumb  text-center p-[80px] sm:p-[90px] md:p-24 bg-no-repeat bg-scroll bg-center bg-cover bg-white"
      style={{ backgroundImage: "url(/images/images/dividerPhoto.jpg)" }}
    >
      <div className="container max-w-screen-xl">
        <div className="row flex flex-wrap -start -ml-4 -mr-4">
          <div className="col basis-7/12 flex-shrink-0 flex-grow-0 relative pr-4 pl-4">
            <div className="divider-info m-0 p-0 gap-1 md:gap-10 text-justify max-w-fit  sm:text-left">
              <h2 className="text-xl leading-8 font-bold  text-white sm:text-2xl pb-2 sm:leading-10 md:text-5xl md:leading[55px]-10 ">
              Upgrade your ride today!       
                 </h2>
              <p className="text-xl  text-white">
              Trade in your old car and get up to ₹20,000 bonus when you buy from us
              </p>
              <a href="http://localhost:5173/shop"> <button
                type="button"
                className="  pt-1 mt-3 rounded-2xl pr-6 pb-1 border-white pl-6 w-44 text-white hover:bg-black h-12  bg-blue-600"
              >
               Buy Car
              </button></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
