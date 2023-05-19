import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import React from 'react';
import {GlobaStyle} from "./styles/global"


export function App() {
  return (
    <>
     <Header/>
     <Dashboard />
     <GlobaStyle/>
    </>
  );
}

