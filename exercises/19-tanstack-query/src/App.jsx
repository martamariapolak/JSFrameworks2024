
import { useState } from "react";
import React from 'react';
import "./App.css";
// import axios (or use Fetch)
// import something else here
import axios from "axios";
import { useQuery } from '@tanstack/react-query';


function App() {
  /**
   * Set up Tanstack Query here
   */
  
  
  const fetchCharacters = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setAllCharacters(data.results);
  };
  
  /**
   * name
   * @type {string} name of the character
   */
 
  
  const selectCharacter = async (characterId) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    setName(data.name);
    setImage(data.image);
  };
  const {
    // Condenses everything we had in state before:
    // "data" replaces "users" state in useEffect example
    data = [], // Setting starting value. This is similar to the starting value for the useState hook: const [users, setUsers] = useState([]);
    isPending, // "isPending" replaces "isLoading" state
    isError, // "isError" replaces "hasError" state
  } = useQuery({
    queryKey: ['users'], // Provide a unique value to share between all React components
    queryFn: fetchUsers, // Set this to query function above
  });
  return (
    
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Plugin character name here */}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src="https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text">
              <option></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
               {allCharacters.map((character) => {
                return (
                  <option
                    value={character.id}
                    key={`character-${character.id}`}
                  >
                    {character.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
   
    </QueryClientProvider>
  );
}

export default App;
