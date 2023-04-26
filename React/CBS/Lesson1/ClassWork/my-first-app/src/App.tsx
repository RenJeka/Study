import React from 'react';
import './App.scss';
import './assets/styles/pico.min.css';
import Counter from "./Counter/Counter";
import Lesson1Component from "./Lesson1Component/Lesson1Component";

interface IApp {
    // children?: JSX.Element|JSX.Element[];
}


class App extends React.Component<IApp> {
    render() {
        return (
            <div className="App">
                <Lesson1Component myColor={"grey"} size={36}/>
                <hr/>
                <Counter name={"Counter1"}/>
            </div>
        );
    }
}

export default App;
