/**
 * @author heart
 * @description 网络请求接口
 * @Date 2022-07-01
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
 *
 */
enum requestType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'POST',
  DELETE = 'DELETE',
}

type params = Record<string, any>

type postType = 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'

type responseType = string | Record<string, any>

type defaultType = Record<string, any>

interface requestParams {
  code: string | number
}

const baseUrl = 'http://localhost:4000/'

function request<T extends responseType>(url = '', data: RequestInit = { method: 'GET' }): Promise<T> {
  const pathUrl = baseUrl + url
  return new Promise((resolve, reject) => {
    fetch(pathUrl, data)
      .then((response) => {
        return response.text()
      })
      .then((jsonData) => {
        // 全局状态判断
        try {
          const val: T & requestParams = JSON.parse(jsonData)
          // 判断状态码
          if (val.code === 200) {
            resolve(val)
          } else {
            // 失败之后的判断等
            return reject(val)
          }
        } catch (e) {
          // string
          const val: T = jsonData as T
          console.log(pathUrl, val, e)
          resolve(val)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

function requestMethod<T>(url: string, type: requestType, data: RequestInit): Promise<T> {
  return request(url, Object.assign({ method: type }, data))
}

export function Get<T extends responseType = defaultType>(url: string, params?: params, data: RequestInit = {}): Promise<T> {
  // url 拼接
  return requestMethod(url, requestType.GET, data)
}

function postRequest<T>(url: string, data: RequestInit = {}, ContentType?: postType): Promise<T> {
  const headers = Object.assign({}, data.headers || {}, { 'Content-Type': ContentType })
  data.headers = headers
  return request(url, Object.assign({ method: requestType.POST }, data))
}

export function Post<T extends responseType = defaultType>(url: string, params?: params, data: RequestInit = {}): Promise<T> {
  data.body = JSON.stringify(params)
  return postRequest(url, data, 'application/json')
}

export function FormDataPost<T extends responseType = defaultType>(url: string, params?: params, data: RequestInit = {}): Promise<T> {
  // formData形式
  return postRequest(url, data, 'application/x-www-form-urlencoded')
}
export function MultiPost<T extends responseType = defaultType>(url: string, params?: params, data: RequestInit = {}): Promise<T> {
  // new FormData形式
  return postRequest(url, data, 'application/x-www-form-urlencoded')
}
