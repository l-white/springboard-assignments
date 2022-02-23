const Tweet = (props) => {
    return (
        <ul>
            <li><strong>Name: </strong>{props.name}</li>
            <li><strong>Date: </strong>{props.date}</li>
            <li><strong>Message: </strong>{props.message}</li>
        </ul>
    );
}

const App = () => (
    <div>
        <Tweet name="Scot" date="02/14/22" message="I love my wife!!!" />
        <Tweet name="Laura" date="02/14/22" message="My husband is a blockhead, but I still love him." />
        <Tweet name="Morris" date="02/14/22" message="My name is Morris the Moose." />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
