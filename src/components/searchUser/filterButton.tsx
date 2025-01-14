import React from "react";

interface FilterButtonProps {
  onFilter: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onFilter }) => {
  return (

    <label className="relative inline-flex cursor-pointer items-center" >
        <input id="switch" type="checkbox" className="peer sr-only" onClick={onFilter} />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] 
            after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 
            after:bg-white after:transition-all after:content-[''] 
            peer-checked:bg-slate-800 peer-checked:after:translate-x-full 
            peer-checked:after:border-white peer-focus:ring-green-300">
        </div>
    </label>
  );
};

export default FilterButton;