import React from 'react'




const ConfigureProjectContainer = () => {

    return (
    <div className=" mt-4 w-full h-full">
      <div className=" container ">
        <div className="w-full">
          <img src="./../images/Dummy_Logo (1).png" className="mx-auto" alt="" />
          <p className=" text-start text-2xl text-neutral-600 text-font-bold font-semibold mt-4 ml-10">Configure Project</p>
          <div className=" border h-0 w-11/12 mx-auto mt-5 border-stone-300"></div>
          <div/>
          <div className="mt-8">
            <form action="" className="px-10">
              <div className="">
                <label htmlFor="" className="text-neutral-600 text-sm text-base font-normal">Project Name</label>
                <div className=" items-center justify-between border border-gray-300 bg-gray-50 rounded-md mt-2">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className="w-full h-10 text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="text-neutral-600 text-sm text-base font-normal ">Framework Preset</label>
                <div className="items-center justify-between border border-gray-300 bg-gray-50 rounded-md mt-2">
                  <input
                    type="password"
                    name=""
                    placeholder=""
                    id=""
                    className="w-full h-10 text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 ">
                <label htmlFor="" className="text-neutral-800 text-sm text-base font-normal ">Root Directory</label>
                <div className=" flex items-center justify-between border border-gray-300 bg-gray-50 rounded-tl-md rounded-bl-md rounded-tr-xl rounded-br-xl mt-2">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className="w-9/12 h-9 text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"/>
                    <div className="border border-gray-300  hover:bg-gray-50  py-2 px-3  rounded-xl ">
                    <button className="text-md " >
                      <a href=" ">Edit</a>
                    </button>
                    </div>
                </div>
              </div>
           <div className="pt-6 gap-4">
              <div className=" border border-gray-200 rounded-md py-4">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none ml-3">
					<span className="text-sm text-gray-900">Build and output settings</span>
					<span className="transition group-open:rotate-180 mr-3">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                 </svg>
              </span>
				</summary>
                <div className="flex gap-4 ">
                    <div className=" mt-4">
				<label htmlFor="" className=" text-neutral-800 text-sm text-base font-normal ml-4 mt-2  ">Key</label>
                
                <div className="  justify-between border border-gray-300 bg-gray-50 rounded-md w- h-10 mt-2 ml-4">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className=" text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
                </div>
                 <div className="mt-4">
                <label htmlFor="" className=" text-neutral-800 text-sm text-base font-normal  mt-2  ">Value(will be Encrypted)</label>
                <div className=" items-center justify-between border border-gray-300 bg-gray-50 rounded-md  h-10 mt-2 ">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className=" text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
                </div>
                
                    <button className=" border border-gray-300 mt-11 mr-6 ml-4 justify center hover:bg-gray-50 w-1/6 h-11  rounded-xl text-md " >
                      <a href=" ">Edit</a>
                    </button>
                </div>
			</details>

            </div>

                
            <div className=" border border-gray-200 rounded-md mt-4 py-4">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none ml-3 ">
					<span className="text-sm text-gray-900">Enviroment Variables</span>
                    <span className="transition group-open:rotate-180 mr-3">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                 </svg>
              </span>
					
				</summary>

                <label htmlFor="" className=" text-neutral-800 text-sm text-base font-normal ml-4 mt-2  ">Build Command</label>
                <div className="flex ">
                <div className=" flex items-center justify-between border border-gray-300 bg-gray-50 rounded-md w-3/4 h-10 mt-2 ml-4">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className=" text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
				<p className="text-sm mt-4 ml-2">OVERRIDE</p>

                <label className='flex cursor-pointer select-none items-center ml-2'>
                <div className='relative'>
          <input
            type='checkbox'
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
        </label>
                
                </div>

                <label htmlFor="" className=" text-neutral-800 text-sm text-base font-normal ml-4 mt-2  ">Output Directory</label>
                <div className="flex ">
                <div className=" flex items-center justify-between border border-gray-300 bg-gray-50 rounded-md w-3/4 h-10 mt-2 ml-4">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className=" text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
				<p className="text-sm mt-4 ml-2">OVERRIDE</p>

                <label className='flex cursor-pointer select-none items-center ml-2'>
                <div className='relative'>
          <input
            type='checkbox'
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
        </label>
                
                </div>

                
               
                <label htmlFor="" className=" text-neutral-800 text-sm text-base font-normal ml-4 mt-2  ">Install Command</label>
                <div className="flex ">
                <div className=" flex items-center justify-between border border-gray-300 bg-gray-50 rounded-md w-3/4 h-10 mt-2 ml-4">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className=" text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                  />
                </div>
				<p className="text-sm mt-4 ml-2">OVERRIDE</p>

                <label className='flex cursor-pointer select-none items-center ml-2'>
                <div className='relative'>
          <input
            type='checkbox'
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
        </label>
                
                </div>
			</details>

            </div>

              </div>
              <button className="bg-black rounded-lg shadow text-center text-white text-base font-semibold w-full py-2 mt-5">
                Deploy
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  



    )
}

export default ConfigureProjectContainer;