import AActions from '../base/AActions'

export const OPEN_PAGE_REQUEST = Symbol()
export const OPEN_PAGE_SUCCESS = Symbol()
export const OPEN_PAGE_FAILURE = Symbol()

export const CLOSE_PAGE = Symbol()

export const openPage = (params) => (dispatch) => {
  dispatch({ type: OPEN_PAGE_REQUEST })
  dispatch(AActions.getCollection(params))
    .then(({ json, error })=> {
      if (error) {
        dispatch({ type: OPEN_PAGE_FAILURE, error })
      } else {
        dispatch({ type: OPEN_PAGE_SUCCESS, data: json })
      }
    })
}

export const closePage = () => (dispatch) => {
  handleCloseEvent()
  dispatch({ type: CLOSE_PAGE, params })
}
