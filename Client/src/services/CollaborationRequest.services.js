import Config from '../config'
import axios from 'axios'

export function createCollaborationRequest (request) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/collaboration`, {
      ...request
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function fetchCollaborationRequests () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/collaboration`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}