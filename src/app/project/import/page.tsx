import List from "./_components/deploy-list";
import NavigationBar from "~/app/_components/navigation-bar";
import ConfigureProjectContainer from "./_components/configure-project-container";


const Import =() => {
 
    return (
    <div className="justify-center">
        <div>
            <NavigationBar/>
        </div>
        <div className="container w-1/2 h-20 pt-24 pb-16 mx-auto justify-center mb-10 gap-4 ">
              <button className=" hover:bg-gray-200 mb-3  py-1 px-3  rounded-full  ">
                <a href=" ">Back</a>

              </button>

              <p className="text-5xl font-black ">
                You're almost done.
              </p>

              <p className="text-xl text-base ">
                 Please follow the step configure your project and deploy it.
              </p>
        </div>

 
        <div className="border border-solid border-gray-700 shadow-2xl rounded-xl bg-grey-100 py-24 mt-20 w-1/2 h-96 mx-auto">
        <List/>
        </div>

        <div className="border border-solid border-gray-700 shadow-2xl rounded-xl bg-grey-100 py-24 mt-20 w-1/2 h-96 mx-auto">
        <ConfigureProjectContainer/>
        </div>

        









        



    </div>



    )
    }

    export default Import;