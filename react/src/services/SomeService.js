import BaseService from './BaseService'

class SomeService extends BaseService{
  createItem(params) {
    let path
    return super.post(path, params)
  }

  retrieveItem(params) {
    let path
    return super.get(path, params)
  }

  retrieveCollection(params) {
    let path
    return super.get(path, params)
  }

  updateItem(params) {
    let path
    return super.put(path, params)
  }

  deleteItem(params) {
    let path
    return super.del(path, patams)
  }

  createPostUpload(params, progressHandler) {
    let path
    return super.postWithProgress(params, progressHandler)
  }

  createPutUpload(params, progressHandler) {
    let path
    return super.putWithProgress(params, progressHandler)
  }
}
