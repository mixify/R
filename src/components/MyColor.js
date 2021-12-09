//MyColor.js
//rce 자동화완성 입력 

import React, { Component } from 'react'

class MyColor extends Component {
    render() {
        const cc = { fontSize: '20pt' };
        const { kind, price} = this.props;
        return (
            <div style={cc}>
              <b>MyColor.js</b> <br></br>  
              종류: {kind}  
              가격: {price} <p></p>
            </div>
        );
    }
}
export default MyColor


//첫번째 MyColor.js
/*
//MyColor.js
//rce 자동화완성 입력 

import React, { Component } from 'react'

class MyColor extends Component {
    static defaultProps = {
        kind:'blue' ,
        price:'4500'
    }

    render() {
        const cc = {fontSize: '20pt' };
        const { kind, price} = this.props;
        return (
            <div style={cc}>
              <b>MyColor.js</b> <br></br>  
              종류: {this.props.kind}  
              가격: {this.props.price} <br></br>
              종류: {kind}  
              가격: {price} <p></p>
            </div>
        );
    }
}
export default MyColor
*/

