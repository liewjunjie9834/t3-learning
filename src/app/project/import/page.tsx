import List from "./_components/deploy-list";
import NavigationBar from "~/app/_components/navigation-bar";
import ConfigureProjectContainer from "./_components/configure-project-container";
import React, { useState } from 'react'


const Import =() => {
 
    return (
    <div className="">
        <div>
            <NavigationBar/>
        </div>
        <div className="container w-1/2 h-20 pt-16 pb-24 mx-auto mb-10 gap-6 ">
              <button className=" hover:bg-gray-50 mb-4  py-1 px-3  rounded-full  ">
                <a href=" ">Back</a>
              </button>

              <p className="text-4xl font-black mb-4 ">
                You're almost done.
              </p>

              <p className="text-md text-base mb-6">
                 Please follow the step configure your project and deploy it.
              </p>
        </div>

 
        <div className="border border-solid border-gray-300 shadow-xl rounded-md bg-grey-50 w-5/12 h-full pb-10 mx-auto mt-20">
        <ConfigureProjectContainer/>
        </div>
          <div className="border border-solid border-gray-300 shadow-xl rounded-md bg-grey-50 py-24 mx-auto mt-20 mb-10 w-5/12 h-96 ">
        </div>


        
    
  



        









        



    </div>



    )
    }

    export default Import;