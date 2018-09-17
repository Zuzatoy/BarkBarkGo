import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { News } from './News';
import { Mem } from './Mem'
import api from '../api'
import { GoodLisa } from './GoodLisa';

// import request from 'superagent'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recepie: '',
      ingregients: [],
      goodLisaImageKey: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.getIngregients = this.getIngregients.bind(this)
    this.refreshSubmit = this.refreshSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    this.getIngregients()
  }

  refreshSubmit(e) {
    this.setState({
      recepie: ''
    })
  }

  getIngregients() {
    const apiKey = 'f54092bddcda7d43b61fc7889d1f439e';
    const recepie = this.state.recepie;

    fetch(`https://www.food2fork.com/api/search?key=${apiKey}&q=${recepie}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ingregients: data.recipes

        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  updateGoodLisaImage = () => {
    const randomKey = Math.random().toString(36).substring(7);
    
    this.setState(() => ({
      goodLisaImageKey: randomKey,
    }))
  }

  routes = [
    {
      path: "/myfriends",
      exact: true,
      sidebar: () => <div className='pageFontSize'>Lisa, be nice ^___^</div>,
      main: () => (
        <GoodLisa
          imageKey={this.state.goodLisaImageKey}
          onButtonClick={this.updateGoodLisaImage}
        />
      )
    },
    {
      path: "/myinfo",
      sidebar: () => <div className='pageFontSize'>Some new for today from Meduza.io</div>,
      main: () => <News />
    },
    {
      path: "/shoelaces",
      sidebar: () => <div className='pageFontSize'>Chuck is cool, be like Chuck</div>,
      main: () => <Mem />
    },
    {
      path: "/mymusiclist",
      sidebar: () => <div>Well now lets find what we have for dinnertonight</div>,
      main: () => (
        <div>
          <input name="recepie" type="text" value={this.state.recepie} onChange={this.handleChange} />
          <Button onClick={this.handleSubmit}>See what we have</Button>
          <Button onClick={this.refreshSubmit}>Refresh</Button>
          {this.state.ingregients.map(ingregient => (
            <div key={ingregient.f2f_url}>
              <div className="col-6">
                <a href={ingregient.f2f_url} target="_blank">{ingregient.title}</a>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ]

  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: 'burlywood'//"#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/myfriends">Lifehacks</Link>
              </li>
              <li>
                <Link to="/myinfo">News</Link>
              </li>
              <li>
                <Link to="/shoelaces">Chuck Norris</Link>
              </li>
              <li>
                <Link to="/mymusiclist">Recipes</Link>
              </li>
            </ul>

            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}



export default Main

