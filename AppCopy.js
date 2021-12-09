
import './App.css';
import hydran from './img/house.png'

import React from 'react';
import './css/style.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MyColor from './components/MyColor.js';
import {MyBTS}   from './components/MyBTS'; // 확장자 js는 생략가능
import MyMemo  from './components/MyMemo';


class App extends React.Component {
  render(){
    return (
      <div>
        <img src={hydran} alt="수선화" width="400" height="150" border="2"/><p></p>
        
        <MyColor kind="snow"  price="24" />
        <MyColor />
        <MyBTS />
        <MyMemo />
      </div>
    );
  }
}
export default App;



//App.js
//첫번째 
/*
import './App.css';
import hydran from './img/hydran.png'

import MyColor from './components/MyColor.js';

function App() {
  return (
    <div>
      <img src={hydran} alt="수선화" width="600" height="150" border="2"/><p></p>
      
      <MyColor kind="snow"  price="24" />
    </div>
  );
}
export default App;
*/
