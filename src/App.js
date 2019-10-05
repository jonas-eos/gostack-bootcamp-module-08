import React, { useState, useEffect, useMemo, useCallback } from 'react';

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
  const [techs, setTech] = useState([]);

  /**
   * State that are used for insert new tech
   * @const
   */
  const [newTech, setNewTech] = useState('');

  /**
   * Handler to Manipulates the process for saving new information to tech state
   * the new tech id must be equal to the length + 1 of the tech state
   * The new tech state must be reset to reset the input too.
   * This const get as return the result of useCallBack.
   * @const
   */
  const handleAddTech = useCallback(() => {
    setTech([
      ...techs,
      {
        id: techs.length + 1,
        name: newTech,
      },
    ]);
    setNewTech('');
  }, [newTech, techs]);

  /**
   * Corresponds to componentDidMount.
   * We define the function that will be executed
   * The blank state means that the component will be monitored on mount event.
   * @function
   */
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTech(JSON.parse(storageTechs));
    }
  }, []);

  /**
   * Save tech to localStorage.
   * The techs state is monitored here, with each change in this state, the
   * function is triggered.
   * @function
   */
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  /** Get the techs length, and monitor techs state */
  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <section>
      <h1>{newTech || 'tech'}</h1>
      <ul>
        {techs.map(tech => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
      <br />
      <strong>You know {techSize} techs!</strong>
      <br />
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
