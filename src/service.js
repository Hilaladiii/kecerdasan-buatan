import axios from 'axios'

export const getDiagnosis = async (data, callback) => {
  await axios.post("https://144d-104-28-247-132.ngrok-free.app/get", data)
    .then(response => {
      callback(response.data)
    }).catch((err) => {
      console.log(err)
    })
}