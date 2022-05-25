import { useState } from "react";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";
import MulDiv from "./MulDiv"

const MainComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? '숨기기' : '보이기'}
                </button>
                {visible && <Counter/>}
            </div>
            <hr/>
            <div>
                <MulDiv/>
            </div>
            <hr/>
            <div>
                <Info/>
            </div>
            <hr/>
            <div>
                <Average/>
            </div>
        </>
    );
}

export default MainComponent;