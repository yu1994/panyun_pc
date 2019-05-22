import axios from 'axios'
const baseAPI = process.env.BASE_API;
const version = ''
export function phoneVerifyApi({phone, version}) {
  const config = {
    "in-version": version
  }
  return axios.get(baseAPI+'register/send/'+phone,{headers:config}).then(res => Promise.resolve(res)).catch(err => Promise.reject(err))
}
export function noteVerifyApi(params,{imei = "no", channel = 'APP',version} = {}) {
  const config = {
    headers: {
      "in-imei" : imei,
      "in-channel" : channel,
      "in-version": version
    }
  }
  return axios.post(baseAPI+'register', params,config).then(res => Promise.resolve(res)).catch(err => Promise.reject(err))
}
export function commendHandelApi (limit, version) { // 产品推荐
  const config = {
    "in-version": version
  }
  return axios.get(baseAPI + `/product/loanRecommend/${limit}`,{headers:config})
}

