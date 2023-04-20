import React, {useState} from 'react';
import Rating from './components/Rating';
import Thanks from "./components/Thanks";

const App = () => {
  const [value, setValue] = useState(null);
  const [rated, setRated] = useState(false);
  return (
    <>
      {rated ? (
        <Thanks value={value} />
      ) : (
        <Rating value={value} setValue={setValue} setRated={setRated} />
      )}
    </>
  );
};

export default App;