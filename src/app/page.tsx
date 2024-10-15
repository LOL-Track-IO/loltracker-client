"use client"

import { useState } from 'react';

const HomePage = () => {
  const [userName, setUserName] = useState<string>("");
  const handleSearch = async (e: React.FormEvent) => {
    console.log("TESTING");  
  };

  return (
    <div className="w-screen flex flex-col h-full">
      <nav className="flex justify-between w-screen px-2 py-3">
        <h1 className='font-bold'>LOLTracker</h1>
        <a href="/">Home</a>
        <a href="/match-history">Match History</a>
        <a href="/champions">Champions</a>
      </nav>

      <div className="search-container flex justify-center">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder="Search Summoner Name..." 
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
