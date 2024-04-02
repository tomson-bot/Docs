import React, { useState } from 'react'
import Background  from './components/Background';
import Foreground from './components/Foreground';
// import Card from './components/Card';

function App() {
 



  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App