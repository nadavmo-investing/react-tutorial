import React from 'react';
import './App.css';

import QuotesTable from  './components/QuotesTable/quotes-table.component';
import RightSide from  './components/RightSide/right-side.component';
import LeftSide from  './components/LeftSide/left-side.component';
import AlertProvider from './States/AlertState/alert-state';

function App() {
  return (
    <div className="container">
        <AlertProvider>
            <LeftSide/>
            <QuotesTable/>
            <RightSide/>
        </AlertProvider>
    </div>
  );
}

export default App;
