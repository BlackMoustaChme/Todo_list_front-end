import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from '../src/gui/page/authorization/authorization.js';
import Registration from "./gui/page/registration/registration.js";
import TodoMain from "./gui/page/todo_main/todo-main.js";
// import { Provider } from 'react-redux';
// import Store from "./vm/redux/implementation/store.js"
import './App.css';
//import {buildProvider} from './vm/pubsub/api.js';
import {buildProvider} from './vm/redux/api.js';

const Provider = buildProvider();

const authorization = (<Provider><Authorization /></Provider>)
const registration = (<Provider><Registration /></Provider>)
const todoMain = (<Provider><TodoMain /></Provider>)
function App() {
  const router = (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={authorization}/>
            <Route path="/authorization" element={authorization}/>
            <Route path="/registration" element={registration}/>
            <Route path="/main" element={todoMain}/>
        </Routes>
      </BrowserRouter>
  );
  return router;
}

export default App;
