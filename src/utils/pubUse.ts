// 获取assets静态资源
export const getAssetsFile = async (url: any) => {
  // 动态引入
  console.log(url);  //图片名
  let src = !!url && await import(url);
  url.value = !!src && src.default
}