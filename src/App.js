import React, { useState, useEffect,useRef, useMemo,lazy, Suspense } from 'react';
import Table from './Table'
// import Text from './Text' //this static importing
import { ThemeContext } from './Context';
import Navbar from './Navbar';
import Heading from './Heading';

// const Textlazy = lazy(()=>delayForDemo(import('./Text')))

export default function App() {
  
    const [theme,toggleTheme] = useState('dark')   

  return <>
  <ThemeContext.Provider value={[theme,toggleTheme]}>
    <Heading/> <br/>
    <Navbar />
  </ThemeContext.Provider>
  </>
  
    
  
}

 
 
