import './App.css';
import hydran from './img/house.png'

import React from 'react';
import axios from 'axios';
import './css/style.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MyColor from './components/MyColor.js';
import {MyBTS}   from './components/MyBTS'; // 확장자 js는 생략가능
import MyMemo  from './components/MyMemo';
import MyMovie from './components/MyMovie'


class App extends React.Component {
  //멤버변수, state, static defaultProps => 일반적으로 this 키워드로 접근
  state = {
    title : 'guest',
    movies : []
  }
  //state는 어떨떄 쓰고 멤버변수는 어떨떄 쓰는거?

  member = 0;

  getMovies = async () => {
    const {
      data: {  data: { movies }   }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies });
  };

  //await 와 async 키워드를 사용하는게 기존 axios 호출과 비교했을때 장점이 뭔가?

  //리액트 제공 LifeCycle 함수 
  //componentDidMount => 컴포넌트가 전부 그려졌을때 호출
  //componentDidUpdate
  //componentWillUnmount => 컴포넌트가 화면에 사라지기 직전에 호출

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {movies} = this.state;
    console.log(movies);

    return (
      <div className='App'>
        {movies.map( (mv,i) => (
        <MyMovie
          key={i}
          id={mv.id}
          year={mv.year}
          title={mv.title}
          summary={mv.summary}
          poster={mv.background_image}
          genres={mv.genres}
        />
        ))}
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
