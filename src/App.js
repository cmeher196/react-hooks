import React from 'react';
import './App.css';
import CountHook from './Components/CountHook';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterArray from './Components/HookCounterArray';

function App() {
  return (
    <div className="App">
      <h1>React Hooks!!</h1>
      {/* <CountHook /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree/> */}
      <HookCounterArray />
    </div>
  );
}

export default App;
