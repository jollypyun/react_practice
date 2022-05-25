import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'MULTIPLY':
            return {value: state.value * 2, coef: state.coef + 1};
        case 'DIVIDE':
            return {value: state.value / 2, coef: state.coef - 1};
        default:
            return state;
    }
}

const MulDiv = () => {
    const [state, dispatch] = useReducer(reducer, {value:1, coef:0});

    return (
        <div>
            <p>
                현재의 value 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'MULTIPLY'})}>*2</button>
            <button onClick={() => dispatch({type: 'DIVIDE'})}>/2</button>
            <p>현재 계수는 {state.coef}입니다.</p>
        </div>
    );
};

export default MulDiv;