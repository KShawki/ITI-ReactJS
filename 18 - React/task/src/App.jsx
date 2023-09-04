import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [img, setImg] = useState(1);

  const handleClick = (e) => {
    console.log(img);
    if (e == 'p') {
      if (!(img > 5 && img < 1)) {
        setImg(() => img - 1);
      }
    }
    if (e == 'n') {
      if (!(img > 5 && img < 1)) {
        setImg(() => img + 1);
      }
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Task 1</h1>
        <img src={`images/${img}.jpg`} alt='' />
        <div className='mt-10'>
          <button onClick={() => handleClick('p')}>Prev</button>
          <button onClick={() => handleClick('n')}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
