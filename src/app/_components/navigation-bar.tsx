// components/NavigationBar.js
import Link from 'next/link';

const NavigationBar = () => {
    return (
        

<div className="flex items-center justify-between px-4 text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <div className="flex items-center gap-10">
        <img src="https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg" alt="Logo" className="h-8 w-8 rounded-full " />
        <p className="font-bold text-md "> JJ Liew Projects </p>
      </div>
  <ul className="flex flex-wrap -mb-px justify-end">
  <li className="me-2">
    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Feedback</a>
  </li>
  <li className="me-2">
    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Changelog</a>
  </li>
  <li className="me-2">
    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Help</a>
  </li>
  <li className="me-2">
    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Docs</a>
  </li>
  <img src="https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg" alt="Logo" className="h-8 w-8 rounded-full mt-3 " />
   </ul>
</div>

    );
};

export default NavigationBar ;