import React, { useState } from 'react';

export default function XDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const found = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setResult({ found: true, meaning: found.meaning });
    } else {
      setResult({ found: false });
    }
  };

  return (
    <div style={{ fontFamily: 'auto', padding: '20px', maxWidth: '500px' }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 16px' }}>Search</button>
      <h3>Definition:</h3>
      <div style={{ marginTop: '20px' }}>
        {result && result.found && (
          <>
            <p>{result.meaning}</p>
          </>
        )}
        {result && !result.found && (
          <p>Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
}
