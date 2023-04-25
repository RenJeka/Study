import React from 'react';
import './App.scss';
import './assets/styles/pico.min.css';
import MyFirstComponent from "./MyFirstComponent/MyFirstComponent";

interface IApp {
    // children?: JSX.Element|JSX.Element[];
}


class App extends React.Component<IApp> {
    render() {
        return (
            <div className="App">
                <MyFirstComponent myColor={"grey"} size={36}/>
                {/*<MyFirstComponent myColor={"grey"} size={16}/>*/}
            </div>
        );
    }
}

export default App;
