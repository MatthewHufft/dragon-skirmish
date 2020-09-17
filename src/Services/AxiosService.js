import Axios from "axios"

export const Api = Axios.create({
  baseURL: "https://drag-vs-champ.herokuapp.com/api/",
  timeout: 10000
})