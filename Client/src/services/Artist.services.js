import Config from '../config'
import axios from 'axios'

export function fetchArtist (id) {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/artist`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
