import React, { PureComponent } from 'react';
import { getRSS } from '../api';
import { Button } from 'semantic-ui-react'

export class News extends PureComponent {
    state = {
        rssItems: [],
    }

    componentDidMount() {
        this.getRSSdata()
    };

    getRSSdata = () => {
        getRSS()
            .then((data) => (
                this.setState(() => ({
                    rssItems: data.items,
                })))
            )
    } // class property is always anonimus function and dont need bind!!!

    render() {
        return (
            <div>
                <h2>News for today!(here should be todays date but well maybe later)</h2>
                <Button onClick={this.getRSSdata}>Refresh</Button>
                {this.state.rssItems.map(({ title, description, url }) => (
                    <div key={title}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={url} target="_blank">Read</a>
                    </div>
                ))}
            </div>
        )
    }
}