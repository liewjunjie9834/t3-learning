
import Dropdown from "./git-account-dropdown";
import SearchBar from "./search-bar";
import RepoList from "./repo-list";
import React from "react";


const RepoContainer: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  

    return (

        <div className="border border-solid border-gray-700 shadow-2xl rounded-xl bg-grey-100 pb-24 pt-8 w-1/2 mx-auto">
          <p className="text-4xl font-black ml-16 mb-6 ">Import Git Repository</p>
        <div className="flex gap-12 " >
          <Dropdown />
          <SearchBar />
        </div>
        
        <div className="py-10 ml-10 mr-10" >
          <RepoList />
        </div>
        
      </div>
      
    )

}

export default RepoContainer;