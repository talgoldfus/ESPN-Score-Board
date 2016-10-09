import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import FullLiveGame from './containers/FullLiveGameContainer'
import FullFinalGame from './containers/FullFinalGameContainer'



export default (
  <div>
    <Route path="/" component={App} />
    <Route path="live/:id" component={FullLiveGame} />
    <Route path="final/:id" component={FullFinalGame} />
  </div>
)
