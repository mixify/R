import './App.css';
import hydran  from './img/hydran.png'
import React from 'react'; 


class Home  extends React.Component {
  render(){
    const cc = { fontSize: '26pt', marginTop:'20px' };

    return (
      <div  style={cc}>
         <img src={hydran} alt='수선화' width='700' height='250' /> <br></br>
         Home.js 2021-12-09-목요일 <p></p>
      </div>
    );
  }
}

export default Home;
