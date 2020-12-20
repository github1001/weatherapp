import React from 'react';
import Frontpage from './screens/Frontpage';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <div id="parent">
    {}
	<Route path="/" exact={true} component={Frontpage} /> 
  </div>
	</BrowserRouter>
  );
}

export default App;
