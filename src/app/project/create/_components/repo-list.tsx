import React from "react"

const RepoList =() => {

  return (
<div className="w-full rounded-lg gap-3">
<a
  href="#!"
  className="flex items-center w-4/6 cursor-pointer rounded-lg h-24 pr-4 border-2 border-gray-500 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
>
  <p className="flex-1 item-justify-start pl-3 pt-2.5 font-black text-xl">T3-Learning </p>
  <button className="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded-full">
    Import
  </button>
</a>

  <a
    href="#!"
    className="block w-4/6 cursor-pointer rounded-lg h-24  border-2 border-gray-500 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
    <p className="item-justify-start pl-3 pt-7 font-black text-xl">T3-Learning </p>
    
  </a>
  <a
    href="#!"
    className="block w-4/6 cursor-pointer rounded-lg h-24 border-2 border-gray-500 shadow-xl transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
     <p className="item-justify-start pl-3 pt-7 font-black text-xl">T3-Learning </p>
  </a>


  </div>

  )
}

  export default RepoList;