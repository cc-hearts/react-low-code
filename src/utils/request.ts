enum requestType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'POST',
  DELETE = 'DELETE',
}

const baseUrl = 'http://localhost:4000/'

function request(url = '', data: RequestInit = { method: 'GET' }) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + url, data)
      .then((response) => {
        console.log(response)
        switch (typeof response) {
          case 'object': {
            return response.json()
          }
          default: {
            return response
          }
        }
      })
      .then((data) => {
        // 全局状态判断
        console.log(data)
        resolve(data)
      })
      .catch((e) => {
        console.log(e)
        reject(e)
      })
  })
}

function requestMethod(url: string, type: requestType, data?: RequestInit) {
  request(url, Object.assign({ method: type }, data))
}

export function Get(url: string, data?: RequestInit) {
  return requestMethod(url, requestType.GET, data)
}

type postType = 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'

function postRequest(url: string, data: RequestInit = {}, ContentType?: postType) {
  const headers = Object.assign({}, data.headers || {}, { 'Content-Type': ContentType })
  data.headers = headers
  return request(url, Object.assign({ method: requestType.POST }, data))
}

export function Post(url: string, data?: RequestInit) {
  return postRequest(url, data, 'application/json')
}

export function FormDataPost(url: string, data?: RequestInit) {
  return postRequest(url, data, 'application/x-www-form-urlencoded')
}
export function MultiPost(url: string, data?: RequestInit) {
  return postRequest(url, data, 'application/x-www-form-urlencoded')
}
