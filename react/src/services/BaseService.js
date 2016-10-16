class BaseService {
  get(path, server) {
    let url = `${server}/${path}`

    let status, headers
    return fetch(url, {
      method: 'get',
      headers: getHeader()
    })
      .then((response) => {
        status = response.status
        headers = response.headers
        return response.json()
      })
      .then((json) => {
        if (response.status < 399) {
          return { json, status }
        } else if (response.status == 401) {
          clearAuthData()
          redirectToLoginPage()
        } else {
          return { status, error: new Error(response.message) }
        }
      })
      .catch(error => {
        handleNetWorkErrorOr500Error();
        return { error }
      })
  }

  post(path, body, server) {
    //call fetch
    //resolve { json, status, error }
  }

  put(path, body, server) {
    //call fetch
    //resolve { json, status, error }
  }

  del(path, server) {
    //call fetch
    //resolve { json, status, error }
  }

  postWithProgress(path, body, progressHandler, server) {
    //call xhr
    //resolve { json, status, error }
  }

  putWithProgress(path, body, progressHandler, server) {
    //call xhr
    //resolve { json, status, error }
  }
}

export default BaseService
