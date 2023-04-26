import "./Counter.scss";
import React, {Component} from 'react';


interface Props {
    name: string;
}

interface State {
    count: number,
}

class Counter extends Component<Props, State> {

    state = {
        count: 0
    }
    render() {
        return (
            <div>

                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState((prevState)=> ({count:prevState.count + 1}))} > Increment </button>
            </div>
        );
    }
}

export default Counter;
