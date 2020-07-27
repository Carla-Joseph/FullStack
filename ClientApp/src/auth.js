
export const authHeader = () => {
  const auth = authFromStorage()

  return auth.token
    ? {
        Authorization: `Bearer ${auth.token}`,
      }
    : {}
}


export const recordAuthentication = auth => {
  localStorage.setItem('auth', JSON.stringify(auth))
}


export const isLoggedIn = () => {
  return getUserId() !== undefined
}


export const getUserId = () => {
  const auth = authFromStorage()

  return auth.user && auth.user.id
}


export const getUser = () => {
  const auth = authFromStorage()

  return auth.user
}


export const logout = () => {
  localStorage.removeItem('auth')
}


const authFromStorage = () => {
  const auth = localStorage.getItem('auth')

  return auth ? JSON.parse(auth) : {}
}