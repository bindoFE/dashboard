import someService from '../../services/SomeServices'

export const GET_ITEM_REQUEST = Symbol()
export const GET_ITEM_SUCCESS = Symbol()
export const GET_ITEM_FAILURE = Symbol()

export const GET_COLLECTION_REQUEST = Symbol()
export const GET_COLLECTION_SUCCESS = Symbol()
export const GET_COLLECTION_FAILURE = Symbol()

export const CREATE_ITEM_REQUEST = Symbol()
export const CREATE_ITEM_SUCCESS = Symbol()
export const CREATE_ITEM_FAILURE = Symbol()

export const UPDATE_ITEM_REQUEST = Symbol()
export const UPDATE_ITEM_SUCCESS = Symbol()
export const UPDATE_ITEM_FAILURE = Symbol()

export const DELETE_ITEM_REQUEST = Symbol()
export const DELETE_ITEM_SUCCESS = Symbol()
export const DELETE_ITEM_FAILURE = Symbol()

export const CREATE_POST_UPLOAD_REQUEST = Symbol()
export const CREATE_POST_UPLOAD_SUCCESS = Symbol()
export const CREATE_POST_UPLOAD_FAILURE = Symbol()

export const CREATE_PUT_UPLOAD_REQUEST = Symbol()
export const CREATE_PUT_UPLOAD_SUCCESS = Symbol()
export const CREATE_PUT_UPLOAD_FAILURE = Symbol()

export const getItem = (params) => (dispatch) => {
  dispatch({ type: GET_ITEM_REQUEST })
  return someService.retrieveItem(params)
    .then(({json, status, error}) => {
      if (error) {
        handleError()
        dispatch({ type: GET_ITEM_FAILURE })
        return { error }
      } else {
        normalize()
        camelizeKeys()
        dispatch({ type: GET_ITEM_SUCCESS })
        return { json }
      }
    })
}

export const getCollection = (params) => (dispatch) => {
  return someService.retrieveCollection(params).then(doThingsLikeAbove)
}

export const createItem = (params) => (dispatch) => {
  deCamelizeKeys()
  return someService.createItem(params).then(doThingsLikeAbove)
}

export const updateItem = (params) => (dispatch) => {
  deCamelizeKeys()
  return someService.updateItem(params).then(doThingsLikeAbove)
}

export const deleteItem = (params) => (dispatch) => {
  return someService.deleteItem(params).then(doThingsLikeAbove)
}

export const createPostUpload = (params, progressHandler) => (dispatch) => {
  deCamelizeKeys()
  return someService.createPostUpload(params, progressHandler).then(doThingsLikeAbove)
}

export const createPutUpload = (params, progressHandler) => (dispatch) => {
  deCamelizeKeys()
  return someService.createPutUpload(params, progressHandler).then(doThingsLikeAbove)
}
