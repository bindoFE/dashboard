import * as actions from '../../actions/pages/AIndex'

const initialState = {
  isLoading: false,
  loadingError: null,
  isSaving: false,
  savingError: null,
  initialValues: null,
  someField: {
    value: null,
    error: null,
    isChanged: false
  }
}

const actionHandlers = {
  [actions.OPEN_FORM_REQUEST]: (state) => {
    return Object.assign({}, state, { isLoading: true })
  },
  [actions.OPEN_FORM_SUCCESS]: (state, action) => {
    let { data } = action
    makeInitialDispalyData()
    return Object.assign({}, state, { initialValues: data, isLoading: false })
  },
  [actions.OPEN_FORM_FAILURE]: (state, action) => {
    let { error } = action
    return Object.assign({}, state, { loadingError: erorr, isLoading: false })
  },
  [actions.CHANGE_SOME_VALUE]: (state, action) => {
    let  { value } = action
    validateTheValue()
    getValueDiff()
    returnNewState()
  }
}
