import "./Lesson1Component.scss"
import image from "../assets/images/reactLogo.png"
import {images} from "../barrel"
import React, {Component} from 'react';

interface Props {
    myColor?: string;
    size?: number;
}

interface State {
    isRotationClockwise: boolean;
}

class Lesson1Component extends Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            isRotationClockwise: true,
        };
    }

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
            <div
                className={'container'}
                style={{backgroundImage:`url(${images.reactWallpaper})`}}
            >
                <>
                    {console.log(12345)}
                    <p
                        style={{color: myColor, fontSize: size}}

                    >This is MyFirstComponent!!</p>
                    <img className={ isRotationClockwise ? 'logo' : 'logo-reverse'} src={images.reactLogo} alt=""/>
                    <button onClick={this.handleClick.bind(this)}>Reverse rotation</button>
                </>
            </div>
        );
    }
}

export default Lesson1Component;
