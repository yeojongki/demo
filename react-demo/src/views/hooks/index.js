import Hooks from './hooks'
import UseState from './useState'
import UseReducer from './useReducer'
import UseEffect from './useEffect'
import UseContext from './useContext'
import UseRef from './useRef'
import UseMemo from './useMemo'
import UseCallback from './useCallback'

export default {
  path: '/hooks',
  component: Hooks,
  children: [
    {
      exact: true,
      path: '/hooks/useState',
      component: UseState
    },
    {
      exact: true,
      path: '/hooks/useReducer',
      component: UseReducer
    },
    {
      exact: true,
      path: '/hooks/useEffect',
      component: UseEffect
    },
    {
      exact: true,
      path: '/hooks/useContext',
      component: UseContext
    },
    {
      exact: true,
      path: '/hooks/useRef',
      component: UseRef
    },
    {
      exact: true,
      path: '/hooks/useMemo',
      component: UseMemo
    },
    {
      exact: true,
      path: '/hooks/useCallback',
      component: UseCallback
    }
  ]
}
