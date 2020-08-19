import React, { useState} from 'react';
import ChildComponent from '../Child/index';

export const ct = React.createContext(null);

function ContextTest(){
  const [count, setCount] = useState(0);

  return (
    <ct.Provider value='111'>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        count++
        </button>
      <br />
      <div>点击了{count}次</div>
      <br />
      <ChildComponent />
    </ct.Provider>
  );
  
}

export default ContextTest;

