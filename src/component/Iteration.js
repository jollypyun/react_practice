import { useState } from "react";

const Iteration = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'Beethoven'},
        {id: 2, text: 'Vivaldi'},
        {id: 3, text: 'Bach'},
        {id: 4, text: 'Hayden'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick= () => {
        if (inputText.trim() === '') {
            alert('입력하세요.')
            return ;
        }
        const nextName = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextName);
        setInputText('');
    };
    const onRemove = e => {
        const nextName = names.filter(name => name.id !== e);
        setNames(nextName);
    };

    const nameList = names.map(name => <li key={name.id}>{name.text}<button value={name.id} onClick={() => onRemove(name.id)}>제거</button></li>);

    return (
        <>
            <input value={inputText} onChange={onChange} placeholder='입력하세요.'/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default Iteration;