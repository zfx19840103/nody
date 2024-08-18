// 获取assets静态资源
const getAssetsFile = (url: string) => {
  return new URL(`${url}`, import.meta.url).href
}
 
export default {
  getAssetsFile
}