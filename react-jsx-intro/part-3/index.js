const Person = (props) => {
    return (
        <div>
            <p>Learn more about this person:</p>
            <ul>
                <li>{props.name.length > 8 ? props.name.slice(0, 6) : props.name}</li>
                <li>{props.age}</li>
                <li>{props.age >= 18 ? 'Go vote!' : 'You must be 18 to vote'}</li>
            </ul>
            <h4>Hobbies:</h4>
            <ul>
                {props.hobbies.map(hobby => <li key={hobby.id}>
                    {hobby}
                </li>)}
            </ul>
        </div>
        
    );
    
}

const App = () => (
    <div>
        <Person name="Laura" age={45} hobbies={['reading', 'walking', 'being with friends', 'dates with husband']}/>
        <Person name="Laura" age={45} hobbies={['reading', 'walking', 'being with friends', 'dates with husband']}/>
        <Person name="Laura" age={45} hobbies={['reading', 'walking', 'being with friends', 'dates with husband']}/>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
