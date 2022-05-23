import {Component, useState} from 'react';

class EventPractice1 extends Component {
    state = {
        message: ''
    }
    render() {
        return (
            <>
                <div>
                    <h1>연습</h1>
                    <input
                    type="text"
                    name="msg"
                    placeholder='입력하시오'
                    onChange = {
                        (e) => {
                            console.log(e.target.value);
                        }
                    }
                    />
                </div>
                <div>
                    <input 
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange = {
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                    />
                </div>
            </>
        );
    }
}

export default EventPractice1;