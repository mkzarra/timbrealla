export function timbreallaDB (key) {
  return `https://timbrealla.firebaseio.com/stories${key ? '/' + key + '/' : ''}.json`
}