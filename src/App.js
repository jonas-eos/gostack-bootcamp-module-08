import React, { useState } from 'react';

/**
 * Main function to load the app
 * Sample function using useState hooks
 * @function
 * @default
 */
export default function App() {
  /**
   * State that containt techs
   * @const
   */
  const [techs, setTech] = useState([
    {
      id: 1,
      name: 'ReactJs',
    },
    {
      id: 2,
      name: 'React Native',
    },
    {
      id: 3,
      name: 'Node.js',
    },
  ]);

  /**
   * State that are used for insert new tech
   * @const
   */
  const [newTech, setNewTech] = useState('');

  /**
   * Handler to Manipulates the process for saving new information to tech state
   * the new tech id must be equal to the length + 1 of the tech state
   * The new tech state must be reset to reset the input too.
   * @const
   * @function
   */
  const handleAddTech = () => {
    setTech([
      ...techs,
      {
        id: techs.length + 1,
        name: newTech,
      },
    ]);
    setNewTech('');
  };

  return (
    <section>
      <ul>
        {techs.map(tech => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAddTech}>
        Add tech
      </button>
    </section>
  );
}
