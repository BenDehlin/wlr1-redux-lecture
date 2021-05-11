import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { HashRouter } from "react-router-dom"

// The 2 things we will need to import to get redux to work will be Provider from 'react-redux'
// and our store from the file where we created our store. Once we've imported these 2 things we
// need to wrap our app in the Provider component and pass that component the store as a prop.
// This will allow us access to our redux state anywhere inside of our application.
import { Provider } from "react-redux"
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    {/* Here we set up our provider wrapped around our App with the store provided as a prop.  */}
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()

// Once you're done with this file go look in ./components/Movies.js so you can see how we access our
// redux state inside of our components.