
// components/ProjectCard.js
// import React from 'react';

// const ProjectCard = () => {
//   return (
//     <div className="bg-white p-3 rounded-md shadow-md">
//       <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/One_Piece_DVD_15.png" alt="HelloReact" className="w-full h-40 object-cover mb-4 rounded-md" />
//       <h3 className="text-xl font-semibold mb-2">HelloReact</h3>
//       <p className="text-gray-600">Today is Jan 2 2024</p>
//     </div>
//   );
// };

// export default ProjectCard;
// components/ProjectCard.js
import React from 'react';

export const ProjectCard = () => {
  return (
    <div className="grid bg-white border border-black-800 p-4 rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-4 h-full">
    <div className="items-center justify-center ">
      <span>
        <img src="https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
        <p className="font-bold text-x2">-T3Learning</p>
        <p className="text-black-400 text-base">T3 learning sable vervel app</p>
        </span>
    </div>
    <div className="">
        <p className="font-bold text-x1">init</p>
        <p className="text-black-400 text-base">3hrs ago</p>
    </div>
</div>

    
  );
};

// export ProjectCard;
