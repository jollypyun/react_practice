import { Component } from "react";

class EventPractice2 extends Component {
    state = {
        msg: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="message"
                    value={this.state.msg}
                    onChange = {
                        (e) => {
                            this.setState({
                                msg: e.target.value
                            })
                        }
                    }
                />
                <button onClick = {
                    () => {
                        alert(this.state.msg);
                        this.setState({
                            msg: ''
                        });
                    }
                }>check</button>
            </div>
        );
    }
}
export default EventPractice2;