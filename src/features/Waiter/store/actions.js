import { WaiterApi } from '../api/server';

export const ACTION_WAITER_SET_LIST = 'WAITER_SET_LIST';
export const ACTION_WAITER_SET_EDIT_ITEM = 'WAITER_SET_EDIT_ITEM';
export const ACTION_WAITER_REMOVE_ITEM = 'WAITER_REMOVE_ITEM';
export const ACTION_WAITER_CREATE_ITEM = 'WAITER_CREATE_ITEM';
export const ACTION_WAITER_UPDATE_ITEM = 'WAITER_UPDATE_ITEM';

export const actionSetList = (list) => ({ type: ACTION_WAITER_SET_LIST, payload: list });
export const actionSetEditItem = (waiter) => ({ type: ACTION_WAITER_SET_EDIT_ITEM, payload: waiter });
export const actionCreateItem = (waiter) => ({ type: ACTION_WAITER_CREATE_ITEM, payload: waiter });
export const actionUpdateItem = (waiter) => ({ type: ACTION_WAITER_UPDATE_ITEM, payload: waiter });

export const actionSaveItem = (waiter) => {
  return (dispatch) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter).then((newWaiter) => dispatch(actionUpdateItem(newWaiter)))
    } else {
      WaiterApi.create(waiter).then((newWaiter) => dispatch(actionCreateItem(newWaiter)))
    }
  }
}

export const actionGetOneItem = (id) => {
  return (dispatch) => {
    WaiterApi.getOne(id).then((waiter) => dispatch(actionSetEditItem(waiter)))
  }
};

// export const actionRemoveItem = (id) => ({ type: ACTION_WAITER_REMOVE_ITEM, payload: id });
export const actionRemoveItem = (id) => {
  return (dispatch) => {
    WaiterApi.delete(id).then(() => dispatch({ type: ACTION_WAITER_REMOVE_ITEM, payload: id }))
  }
};