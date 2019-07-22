import compose from './compose.js'

const applyMiddlewares = (...midlewares) => createStore => (...args) => {
  const store = createStore(...args)
  let dispatch = () => {
    throw new Error(
      'Dispatching while constructing your middleware is not allowed. ' +
        'Other middleware would not be applied to this dispatch.'
    )
  }

  const middlewareAPI = {
    getState: store.getState,
    dispatch: (...args) => dispatch(...args)
  }

  const chain = midlewares.map(middleware => middleware(middlewareAPI))
  dispatch = compose(...chain)(store.dispatch)

  return {
    ...store,
    dispatch
  }
}

export default applyMiddlewares
