import React from 'react';
import './App.css';

import QuotesTable from  './components/QuotesTable/quotes-table.component';
import RightSide from  './components/RightSide/right-side.component';
import LeftSide from  './components/LeftSide/left-side.component';

function App() {
  return (
    <div className="container">
        <LeftSide/>
        <QuotesTable/>
        <RightSide/>
    </div>
  );
}

export default App;
