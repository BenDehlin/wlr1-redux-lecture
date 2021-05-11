## What I did to set up
1. ran `npx create-react-app wlr1-redux-lecture` and cd'd into it
2. ran `npm install react-router-dom`
3. imported `HashRouter` into `./src/index.js` and wrapped it around `App`
4. created 3 components, 2 routes and a Header for navigation `./src/components/AddMovie.js`, `./src/components/Movies`, and `./src/components/Header.js` respectively
5. created `./src/routes.js` and added `AddMovie` and `Movies` as routes
6. Imported the `routes` and `Header` into `./src/App.js` to be rendered

## What you need to do to follow along
1. fork/clone repo
2. cd into the cloned repo
3. run `npm install` this will install all the dependencies you will need including: `react-router-dom redux react-redux redux-promise-middleware` and `axios` since I have already included them in the dependencies.
4. that's it, we'll do the rest in lecture

## What you will do to follow the notes I went back and added after
1. Start in `./src/redux/movieReducer.js` to see how we set up our first reducer for our movie state
2. Look in the `./src/redux/store.js` next to see how we have combined our reducers to be saved in our "store"
3. Look in `./src/index.js` to see how we attached our store to our app using the Provider component wrapped around our app.
4. Go to our `./src/components/Movies.js` to see how we ACCESS the movieReducer movies array in a component
5. Go to `./src/components/AddMovie.js` to see how we ACCESS the movieReducer's addMovie action builder
6. From here we've seen all the different steps of setting up redux (from reducer to store to index.js to component). You can either go back and review this again from the beginning or move on to see a second example that also uses `redux-promise-middleware`
7. See the `./src/redux/pokemonReducer.js` to see our second reducer example that is also making an axios call
8. See the `./src/components/Pokemon.js` file to see how we use both the redux state AND the action builder