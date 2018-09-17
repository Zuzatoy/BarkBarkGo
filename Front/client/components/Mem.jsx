import React, { PureComponent } from 'react';
import { getRandomJoke } from '../api';
import { Image, Button } from 'semantic-ui-react'

export class Mem extends PureComponent {
    state = {
        url: '',
        refresh: ''
    }


    componentDidMount() {
        this.getJoke();
    }

    getJoke = () => {
        getRandomJoke()
            .then((data) => (
                this.setState(() => ({
                    url: data.value
                })))
            )
    }


    render() {

        return (
            <div>
                <h1>Here is some facts about Chuck</h1>
                {this.state.url && <p className="joke">{this.state.url} </p>}
                <Button onClick={this.getJoke}>New joke?</Button>
                <Image src='images/ChuckN.jpg' size="big"/>
            </div>
        )
    }
}

