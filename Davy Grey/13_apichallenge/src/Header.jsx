import React, { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full bg-white p-6">
      <div className="flex w-full space-x-4">
        {/* Users Column */}
        <div
          onClick={() => handleSelect(0)}
          className={`flex-1 p-4 rounded-lg cursor-pointer text-center ${selected === 0 ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
        >
          <h2 className="text-lg font-semibold">Users</h2>
          {/* Example content */}
          <p>John, Jane, Alex</p>
        </div>

        {/* Comments Column */}
        <div
          onClick={() => handleSelect(1)}
          className={`flex-1 p-4 rounded-lg cursor-pointer text-center ${selected === 1 ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
        >
          <h2 className="text-lg font-semibold">Comments</h2>
          {/* Example content */}
          <p>This is a comment.</p>
        </div>

        {/* Images Column */}
        <div
          onClick={() => handleSelect(2)}
          className={`flex-1 p-4 rounded-lg cursor-pointer text-center ${selected === 2 ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
        >
          <h2 className="text-lg font-semibold">Images</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
