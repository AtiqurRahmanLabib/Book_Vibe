import { useState } from "react";
// import { ChevronDown } from "lucide-react";

const SortByDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState("Sort By");

    const options = ["Rating", "Number of pages", "Publisher year"];

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#23BE0A] w-[145px] h-[52px] rounded-[8px] text-white font-semibold px-5 py-2 flex items-center gap-2"
            >
                {/* {selectedOption} <ChevronDown size={18} /> */}
                Sort By
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-[145px] bg-white shadow-lg rounded-lg border border-gray-200">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                // setSelectedOption(option);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortByDropdown;
