import Config from '../../config/index'

const baseUrl = Config.target

export default async(type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url
  let aData = [] // 存储数据
  let sData = '' // 拼接数据
  for (let attr in data) {
    aData.push(attr + '=' + data[attr])
  }
  sData = aData.join('&')
  if (type === 'GET') {
    url = url + '?' + sData
  }

  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      // credentials: 'include', Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors'
      // cache: 'force-cache' 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 除非没有任何缓存, 那么它将发送一个正常的request.
    }

    if (type === 'POST' || type === 'PUT') {
      // url = url + '?v=' + new Date().getTime() + Math.random().toString(36).substr(2)
      Object.defineProperty(requestConfig, 'body', {
        value: sData
      })
    }

    try {
      var response = await fetch(url, requestConfig)
      var responseJson = await response.json()
    } catch (error) {
      throw new Error(error)
    }
    return responseJson
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else if (window.ActiveXObject) {
        // requestObj = new ActiveXObject
      }

      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
