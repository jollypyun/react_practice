// 임의의 메서드 만들기

import { Component } from 'react';

class EventPractice3 extends Component {
    // constructor를 이용.

    // state= {
    //     msg: ''
    // }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         msg: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.msg);
    //     this.setState({
    //         msg: ''
    //     });
    // }

    // render() {
    //     return(
    //         <div>
    //             <h1>이벤트</h1>
    //             <input 
    //             type="text"
    //             name="message"
    //             placeholder='입력란'
    //             value={this.state.msg}
    //             onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     );
    // }

    // property initializer syntax를 이용한 메서드
    state= {
        msg: ''
    }

    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.msg);
        this.setState({
            msg: ''
        });
    }

    render() {
        return (
            <div>
                <h2>연습</h2>
                <input
                type="text"
                name="message"
                placeholder='입력'
                value={this.state.msg}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>입력</button>
            </div>
        );
    }
}

export default EventPractice3;