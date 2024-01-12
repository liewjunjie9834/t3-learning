"use client"

import SearchBar from "./_components/search-bar"
import RepoContainer from "./_components/repo-container"
import NavigationBar from "~/app/_components/navigation-bar"


const create =() => {


  return (
    <div className="bg-gray-50 text-black ">

      <div className=" bg-white ">
        <NavigationBar />
      </div>

      <div className=" h-screen  pt-20 my-auto ">
       <div className="container w-1/2 h-20  mx-auto justify-center mb-10 ">
              <p className="text-5xl font-black ">
                Let's build something's new.
              </p>
              <p className="text-xl text-base justify-end ">
                 To deploy a new project,import n existing Git Repository or get start with one of our templates
              </p>
        </div>

      

        <RepoContainer/>
      
    </div>
  </div>



      )

}

export default create;