import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

// Custom Dropdown Component
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 text-left bg-white dark:bg-gray-800 border rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cameroon-yellow focus:border-cameroon-yellow dark:focus:ring-offset-gray-900 ${
          error
            ? "border-cameroon-red focus:border-cameroon-red focus:ring-cameroon-red"
            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`${
              selectedOption
                ? "text-gray-900 dark:text-gray-100"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {selectedOption || placeholder}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left transition-colors duration-150 flex items-center justify-between ${
                selectedOption === option
                  ? "bg-gradient-to-r from-cameroon-green to-cameroon-red text-white"
                  : "hover:bg-cameroon-yellow/20"
              }`}
            >
              <span
                className={
                  selectedOption === option
                    ? "font-bold"
                    : "text-gray-900 dark:text-gray-100"
                }
              >
                {option}
              </span>
              {selectedOption === option && (
                <Check className="w-5 h-5 text-white" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
