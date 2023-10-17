import {
    ACTION_WAITER_SET_LIST,
    ACTION_WAITER_SET_EDIT_ITEM,
    ACTION_WAITER_REMOVE_ITEM,
    ACTION_WAITER_CREATE_ITEM,
    ACTION_WAITER_UPDATE_ITEM,
  } from './actions'
  
  const DEFAULT_WAITER = {
    firstName: '',
    phone: '',
  }
  
  const initialState = {
    editingWaiter: DEFAULT_WAITER,
    list: [],
  };
  
  export function reducer (state = initialState, { type, payload }) {
    switch (type) {
      case ACTION_WAITER_SET_LIST:
        return { ...state, list: payload }
      case ACTION_WAITER_SET_EDIT_ITEM:
        return { ...state, editingWaiter: payload }
      case ACTION_WAITER_REMOVE_ITEM:
        return { ...state, list: state.list.filter((waiter) => waiter.id !== payload) }
      case ACTION_WAITER_CREATE_ITEM:
        return {
          ...state,
          editingWaiter: {...DEFAULT_WAITER},
          list: [...state.list, payload],
        }
      case ACTION_WAITER_UPDATE_ITEM:
        return {
          ...state,
          editingWaiter: DEFAULT_WAITER,
          list: state.list.map((waiter) => waiter.id === payload.id ? payload : waiter),
        }
      default:
        return state;
    }
  }