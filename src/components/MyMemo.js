import React, { Component } from 'react'


class MyMemo extends Component {
    num = 2 ; //전역변수  접근  this키워드

    state = {
        code: 7080 ,
        title: 'title',
        todos:[
            {id:0, text:'java', checked:'false'} ,
            {id:1, text:'spring', checked:'true'} ,
            {id:2, text:'python', checked:'false'} ,
        ] 
    }//end

    
    handleFirst(){ //일반함수
        alert('일반함수 first');
        console.log('일반함수 first');
    }//end

    handleTwo = ( ) =>{ //화살표함수 
        this.setState({
            code:1588 ,
            title:'pizza'
        });
    }//end

    handleAdd = () =>{
        const {todos} = this.state;
        this.setState({
            code:9900 ,
            title:'gugu' , //map,concat,filter
            todos: todos.concat({ //id:2, text:'python', checked:'false'
              id:this.num=this.num+1,
              text: '동장군',
              checked: 'true'   
            }), 
        });
    }

    render() {
        const cc = { fontSize: '20pt' };
        const {code,title} = this.state ;
        const {todos} = this.state ;

        let todoList = todos.map(item => {
            // return <li>{item.text}<input type="checkbox" name = {item.text} key={item.id} width='180' height='150'></input></li>
            return <li style={{ listStyleType : "none"}}>{item.text}<input defaultChecked={item.checked} type="checkbox" name = {item.text} key={item.id} width='180' height='150'></input></li>
        });

        return (
            <div style={cc}>
                <p></p><b>MyMemo.js</b> <br></br> 
                코드:{code} &nbsp; 제목:{title} <br></br>  
                <button onClick={this.handleFirst} style={cc}>함수first</button>  
                <button onClick={this.handleTwo} style={cc}>함수two</button> 
                <button onClick={this.handleAdd} style={cc}>함수add</button>   
                <ul>
                {todoList}
                </ul>
            </div>
        )//return end
    }
}

export default MyMemo
