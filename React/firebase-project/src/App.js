import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: "",
            key: "",
            value: "",
            data: {

            }
        }
    }

    componentDidMount() {
        // const db = firebase.database();
        // const name = db.ref("name");
        // const returnedValue = name.on("value", (elem) => {
        //     this.setState({name: elem.val()})
        //     console.log(this.state.name);
        // });

        const db = firebase.database();
        const surname = db.ref("surname");
        surname.on("value", (elem) => {
            console.log("значение: ",  elem.val());
            this.setState({data: elem.val()})

        } )
    }

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value,
        })
    };

    createAccount = () => {
        const { email, password } = this.state;
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     // .then(response => console.log("response: ", response))
        //     .catch(error => console.log("error: ", error));

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
                this.setState({hasAccount: true})

            })
            .catch(error => console.log(error))
    };

    sendData = () => {
        const {key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);
        alert("Данные записаны!")
    };

    getData = () => {

    }

    render() {
        const { hasAccount, name, data } = this.state;

        this.getData();
        return (
            <div>
                {
                    hasAccount ?
                        (
                            <div>
                                <input
                                    type="text"
                                    id="key"
                                    placeholder="please enter key"
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    id="value"
                                    placeholder="please enter value"
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="submit"
                                    onClick={this.sendData}
                                />

                                {
                                   Object.keys(data).map(elem => (
                                       <div>
                                           {
                                               data[elem]
                                           }
                                       </div>
                                   ))
                                }
                            </div>
                        )
                        :
                        (
                            <div className="login-block" >
                                <input
                                    type="text"
                                    placeholder="email"
                                    id="email"
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="password"
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="submit"
                                    onClick={this.createAccount}
                                />
                            </div>
                        )
                }

            </div>
        )
    }
}
