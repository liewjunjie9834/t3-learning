// components/Dropdown.tsx
import { useState, FC } from 'react';

interface DropdownProps {
  options: string[];
  style?: React.CSSProperties;
}

// 
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    // You can add additional logic when an option is clicked
    // For example, you might want to close the dropdown
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleButtonClick}
        className="inline-flex items-center px-4 py-2 border border-gray-300 font-bold-text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
      >
        sort by activity
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleOptionClick}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;