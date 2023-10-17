import { combineReducers } from 'redux'
import { reducer as waitersReducer } from '../features/Waiter/store/reducer'

export const rootReducer = combineReducers({
  waiter: waitersReducer,
})


