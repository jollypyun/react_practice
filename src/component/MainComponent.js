import { Component } from "react";
import LifeCycle from "./LifeCycle";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class MainComponent extends Component {
    state= {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycle color={this.state.color}/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default MainComponent;