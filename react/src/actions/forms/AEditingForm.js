import AActions from '../base/AActions'

export const OPEN_FORM_REQUEST = Symbol()
export const OPEN_FORM_SUCCESS = Symbol()
export const OPEN_FORM_FAILURE = Symbol()

export const SUBMIT_FORM_REQUEST = Symbol()
export const SUBMIT_FORM_SUCCESS = Symbol()
export const SUBMIT_FORM_FAILURE = Symbol()

export const CLOSE_FORM = Symbol()

export const CHANGE_SOME_VALUE = Symbol()

export const changeSomeValue = (value) => ({ type: CHANGE_SOME_VALUE, value })

export const openForm = (params) => (dispatch) => {
  dispatch({ type: OPEN_FORM_REQUEST, params })
  dispatch(AActions.getItem(params))
    .then(({json,error})=> {
      if (error) {
        handleError()
        dispatch({ type: OPEN_FORM_FAILURE, error })
      } else {
        dispatch({ type: OPEN_FORM_SUCCESS, data: json })
      }
    })
}

export const submitForm = () => (dispatch, getState) => {
  const state = getState()
  dispatch({ type: SUBMIT_FORM_REQUEST })
  let params = getDiff(state)
  dispatch(AActions.updateItem(params))
    .then(({json, error})=> {
      if (error) {
        handleError()
        dispatch({ type: SUBMIT_FORM_FAILURE, error })
        dispatch({ type: SUBMIT_FORM_SUCCESS, data: json })
      }
    })
}

export const closeForm = () => (dispatch) => {
  handleCloseEvent()
  dispatch({ type: CLOSE_FORM })
}
