const Component1 = props => {
    return (
        <div>
            Hi, My name is {props.name}. <br />
            Children's value is {props.children}
            Thx!!
        </div>
    );
};

Component1.defaultProps = {
    name: 'Jolly'
};

export default Component1;