import { Component } from "react";

class LifeCycle extends Component {
    state = {
        number: 0,
        color: null
    };
    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextState, prevState) {
        
    }
}

export default LifeCycle;