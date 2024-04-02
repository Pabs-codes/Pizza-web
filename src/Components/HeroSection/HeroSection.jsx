// import React from "react";
// import HeroLeft from "./HeroLeft";
// import HeroRight from "./HeroRight";
// export default function HeroSection() {
//   return (
//     <div className="relative bg-yellow-50 ">
//       <div className="max-w-7xl mx-auto min-h-screen">
//         <div className="p-3 flex flex-wrap sm:flex-row lg:flex-row items-center sm:justify-around">
//           <HeroLeft />
//           <HeroRight/>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import backgroundImage from "../Assets/cat_aktionen_bg_header-opti.webp"; 

export default function HeroSection() {
  return (
    <div className="relative " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="p-3 flex flex-wrap sm:flex-row lg:flex-row items-center sm:justify-around">
          <HeroLeft />
          <HeroRight/>
        </div>
      </div>
    </div>
  );
}
