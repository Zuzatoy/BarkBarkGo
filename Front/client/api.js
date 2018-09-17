import request from 'superagent'

const rootUrl = 'http://localhost:3000/api'

export function getAllUsers() {
  return request.get(rootUrl + '/getAllUsers')
    .then(res => {
      return res.body.users
    })
}

export function getUser(id) {
  const reqStr = `/getUser/${id}`
  return request.get(rootUrl + reqStr)
    .then(res => {
      return res.body.user
    })
}

export function addUser(user) {
  return request
    .post(rootUrl + '/addUser')
    .set('Content-Type', 'application/json')
    .send(user)
    .end()
}

export function getRSS() {
  return window.fetch(rootUrl + '/rss')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getRandomJoke() {
  return window.fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}



export function getGoodLisaData() {
  return window.fetch('http://belikebill.azurewebsites.net/billgen-API.php', {
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
