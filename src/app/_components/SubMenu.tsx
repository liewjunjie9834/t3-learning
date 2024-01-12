const SubMenu = () => {
    return (
        

<div className="text-sm font-medium text-center text-gray-500 px-4 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <a href="/project" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500 dark:border-black hover:bg-gray-200 dark:hover:bg-gray-1000 transition-all duration-200">Overview</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200" aria-current="page">Intergrations</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">Activity</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">Domains</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">Usage</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">Monitoring</a>
        </li>
        <li className="me-2">
           <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200-">Storage</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-gray-500  hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">Settings</a>
        </li>
    </ul>
</div>

    );
};

export default SubMenu ;