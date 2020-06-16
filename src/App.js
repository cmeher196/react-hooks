import React from 'react';
import './App.css';
import CountHook from './Components/CountHook';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterArray from './Components/HookCounterArray';
import HookCounterOne from './Components/useEffect/HookCounterOne';

function App() {
  return (
    <div className="App">
      <h1>React Hooks!!</h1>
      {/* <CountHook /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterArray /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
