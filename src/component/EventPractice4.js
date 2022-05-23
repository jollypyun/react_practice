/*
    input 여러 개 다루기
    - event 객체를 활용하여 처리한다.

    onKeyPress
    - 키를 눌렀을 때 이벤트
*/


import { Component } from "react";

class EventPractice4 extends Component {

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>연습</h1>
                <input 
                type='text'
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input 
                type='text'
                name="message"
                placeholder="메시지"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice4;