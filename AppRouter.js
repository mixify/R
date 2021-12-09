import './App.css';
import hydran from './img/house.png'

import React from 'react';
import './css/style.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MyColor from './components/MyColor.js';
import {MyBTS}   from './components/MyBTS'; // 확장자 js는 생략가능
import MyMemo  from './components/MyMemo';


class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <BrowserRouter>
        <ul className='menu-wrapper'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/mycolor'>Color</Link></li>
          <li><Link to='/mybts'>BTS</Link></li>
          <li><Link to='/mymemo'>Memo</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mycolor' element={<MyColor />} />
          <Route path='/mybts' element={<MyBTS />} />
          <Route path='/mymemo' element={<MyMemo />} />
          </Routes>
        </BrowserRouter>
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
