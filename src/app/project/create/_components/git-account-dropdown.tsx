// // components/Dropdown.tsx
// import { useState, FC } from 'react';

// import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";


// interface DropdownProps {
//   options: string[];
//   style?: React.CSSProperties;
// }

// // 
// const Dropdown: React.FC<DropdownProps> = ({ options }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left rounded-lg justify-start ">
//       <button
//         onClick={handleButtonClick}
//         className="inline-flex justify-start px-4 ml-12  py-2 w-80 border-2 border-gray-500 font-bold-text-lg font-medium rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-violet-500 active:bg-gray-200"
//       >
//         <p >Account Name</p>
//       </button>

//       {isOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="">
//             {options.map((option) => (
//               <a
//                 key={option}
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 onClick={handleOptionClick}
//               >
//                 {option="Acc Name",option2="Set GitHub Provider"}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


// import { useState } from 'react';
// import Link from 'next/link';

// const Dropdown = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <div className="relative inline-block text-left rounded-lg justify-start">
//       <button
//         onClick={handleToggleDropdown}
//         className="inline-flex justify-start px-4 ml-12  py-2 w-80 border-2 border-gray-500 font-bold-text-lg font-medium rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-violet-500 active:bg-gray-200"
        
//         type="button"
//         id="dropdownDelayButton"
//         data-dropdown-toggle="dropdownDelay"
//         data-dropdown-delay="500"
//         data-dropdown-trigger="hover"
//       >
//         Dropdown hover
//         <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//         </svg>
//       </button>

      
//       {isDropdownVisible && (
//         <div id="dropdownDelay" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
//             <li>
//               <Link href="">
//                 <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Acc Name</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="">
//                 <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add GitHub Acc</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="">
//                 <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Set Git Hub Provider</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


import { useState } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative inline-block text-left rounded-lg justify-start">
      <button
        onClick={handleToggleDropdown}
        className="inline-flex justify-start px-4 ml-12 py-2 w-80 border-2 border-gray-500 font-bold text-lg font-medium rounded-md bg-white shadow-xl text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-gray-700 active:bg-gray-200"
        type="button"
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
      >
        Acc Name
        {/* <svg className="w-2.5 h-2.5 ms-3 flex " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg> */}
      </button>

      {isDropdownVisible && (
        <div id="dropdownDelay" className="origin-top-right absolute right-0 mt-1.5 w-80 bg-gray-700 border-gray-700 rounded-lg shadow-lg  ring-1 ring-black  focus:outline-none">
          <ul className="py-2 text-md text-gray-black dark:text-gray-200" aria-labelledby="dropdownDelayButton">
            <li>
                <a href="#"className="block px-4 py-2 text-white border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Acc Name</a>
            </li>
            <li>
                <a href="#"className="block px-4 py-2 text-white border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add GitHub Acc</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 twxt-white border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Set Git Hub Provider</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
