import "./MyFirstComponent.scss"
import image from "../assets/images/reactLogo.png"
import React, {Component} from 'react';

interface Props {
    myColor?: string;
    size?: number;
    // children?: string | JSX.Element | JSX.Element[];
}

interface State {
    isRotationClockwise: boolean;
}


class MyFirstComponent extends Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            isRotationClockwise: true,
        };
    }

    // public componentDidMount() {
    //     this.props.isRotationClockwise.
    //
    // }

    public handleClick() {
        console.log(this);

        this.setState((prevState) => ({
                isRotationClockwise: !this.state.isRotationClockwise
            }));
    }

    render() {
        const {myColor, size} = this.props;
        const {isRotationClockwise} = this.state;


        return (
            <div className={'container'}>
                <>
                    {console.log(12345)}
                    <p
                        style={{color: myColor, fontSize: size}}

                    >This is MyFirstComponent!!</p>
                    <img className={ isRotationClockwise ? 'logo' : 'logo-reverse'} src={image} alt=""/>
                    <button onClick={this.handleClick.bind(this)}>Reverse rotation</button>
                </>
            </div>
        );
    }
}

export default MyFirstComponent;
