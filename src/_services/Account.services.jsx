
let saveToken = (token) => {
  localStorage.setItem('token', token)
}

let logout = () => {
  localStorage.removeItem('token')
  localStorage.clear()
}

let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

let getToken = () => {
  return localStorage.getItem('token')
}

export const accountServices = {
  saveToken, logout, isLogged, getToken
}