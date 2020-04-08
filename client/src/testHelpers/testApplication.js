import muiTheme from '../config/themeConfig'
import { render as reactTestingLibraryRender } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom/extend-expect'
import { default as rootReducer } from '../store'

export const render = (
    children,
    initialState = {},
    options,
  ) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    const rendered = reactTestingLibraryRender(
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
         {children}
        </MuiThemeProvider>
      </Provider>,
      options
    )
  
    return {
      ...rendered,
      rerender: (ui, initialState = {}, options) => render(ui, initialState, { container: rendered.container, ...options})
    }
}
export default render
