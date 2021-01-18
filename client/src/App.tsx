import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages';


export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
}
