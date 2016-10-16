import * as actions from '../../actions/pages/AIndex'

const initialState = {
  isLoading: false,
  loadingError: null,
  entities: null,
}

const actionHandlers = {
  [actions.OPEN_PAGE_REQUEST]: (state) => {
    return Object.assign({}, state, { isLoading: true })
  },
  [actions.OPEN_PAGE_SUCCESS]: (state, action) => {
    let { data } = action
    return Object.assign({}, state, { entities: data, isLoading: false })
  },
  [actions.OPEN_PAGE_FAILURE]: (state, action) => {
    let { error } = action
    return Object.assign({}, state, { erorr, isLoading: false })
  }
}
