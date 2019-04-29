var root = document.getElementById('root');

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', null, "To Do List"),
        React.createElement(ToDoList, {
            itemone: "study React",
            itemtwo: "practice git commands",
            itemthree: "study JavaScript"
        }),
        React.createElement(FormInput, {}),
    ]);
};

ReactDOM.render(React.createElement(App), root);