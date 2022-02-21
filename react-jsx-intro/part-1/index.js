const NamedComponent = (props) => {
    return (
        <p>My name is {props.name}.</p>
    );
    
}

const App = () => (
    <div>
        <h1>My very first component</h1>
        <NamedComponent name="Laura" />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
