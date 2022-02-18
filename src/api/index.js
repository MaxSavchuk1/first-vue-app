const requests = require.context('./modules', true, /[A-Za-z0-9-_,\s]+\.js$/i)
const api = {}
requests.keys().forEach(key => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  if (matched && matched.length > 1) {
    const label = matched[1]
    api[label] = requests(key).default
  }
})

export default api
