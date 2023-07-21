import satData from './satData.js';

const Buttons = ({filterByType,setSat,displaySats}) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat,id) => (
      <button onClick={() => filterByType(sat)}>
          {sat} Orbit
        </button>
      ))} 
       <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;