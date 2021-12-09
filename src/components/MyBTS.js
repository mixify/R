import React, { Component } from 'react'


class MyBTS extends Component {
    //state상태 배열기술후 나중에 setState()값응용
    state = {
        idols: [ 'bts방탄', '블랙핑크blackpink', '워너wanaone'] ,
        picture: [ './images/bt.png', './images/blackpink.png',  './images/wanaone.png'  ], 
    }

    render() {
        let arr = this.state.idols;
        let str = [];  //str.push()함수
        for(let i=0; i<arr.length; i++){
           str.push(<b key={i} style={{color:'blue'}}> {arr[i]}&nbsp;</b>);
        }

        let strImg = this.state.picture.map((item,i)=>{
            return <img key={i} src={item}  width='180' height='150'></img>
        });

        const msg = "안녕하세요" ;
        const cc = { fontSize: '20pt' };
        return (
            <div style={cc}>
                <b>MyBTS.js {msg}</b> <br></br>
                {str}<br></br>
                {strImg}
            </div>
        )//return end
    }
}

export default MyBTS
