"use client"

import React from 'react';
import { ProjectCard } from './_components/ProjectCard';
import SearchBar from './_components/SearchBar';
import NavigationBar from './_components/navigation-bar';
import SubMenu from './_components/SubMenu';
import Dropdown from './_components/Dropdown';

const Home: React.FC = () => {
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];



  return (
    <div className="bg-grey-500 text-black ">

      <div className=" bg-white ">
        <NavigationBar />
        <div className=" bg-white">
          <SubMenu />
        </div>
      </div>
     <div className="text-black sm:px-20 ">
      <div className="text-white sm:px-20 py-4 flex items-center space-x-6">
          <SearchBar />
          <Dropdown options={dropdownOptions} />
          <div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">A</button>
            <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">B</button>
          </div>
          <Dropdown options={dropdownOptions} />

        </div>
      <div className="project-card-container items-center flex justify-center w-screen">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-9/12 max-w-7xl ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
     </div>
    </div>

  );
};

export default Home;
