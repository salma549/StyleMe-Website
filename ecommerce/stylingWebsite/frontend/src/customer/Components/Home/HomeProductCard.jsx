// import React from "react";

// import { useNavigate } from "react-router-dom";

// const HomeProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/men/clothing/mens_kurta`)}
//       className="cursor-pointer flex flex-col items-center bg-purple-200 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
//     >
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product?.image || product?.imageUrl}
//           alt={product?.title}
//         />
//       </div>

//       <div className="p-4 ">
//         <h3 className="text-lg font-medium text-gray-900">
//           {product?.brand || product?.title}
//         </h3>
//         <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg shadow-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/70 transition-shadow duration-300 ease-in-out overflow-hidden w-[15rem] mx-3 transform hover:scale-105 hover:opacity-90"
    >
      <div className="h-[18rem] w-[14rem] overflow-hidden">
        <img
          className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 animate-pulse"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
