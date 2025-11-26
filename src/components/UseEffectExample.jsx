import { useState, useEffect } from 'react';

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count updated!");
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default UseEffectExample;
