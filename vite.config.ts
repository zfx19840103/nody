import { defineConfig } from 'vite'

// import { compression } from 'vite-plugin-compression2'

// import mkcert from "vite-plugin-mkcert";

import vue from '@vitejs/plugin-vue'
import path from 'path' // 此处

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // mkcert(),
    // 就是使用这个插件实现的文件压缩
    // compression({
    //     threshold:2000, // 设置只有超过 2k 的文件才执行压缩
    //     deleteOriginalAssets: true, // 设置是否删除原文件
    //     skipIfLargerOrEqual:true, // 如果压缩后的文件大小与原文件大小一致或者更大时，不进行压缩
    //     // 其他的属性暂不需要配置，使用默认即可
    // })
  ],
  server: {
    // https 选项需要开启
    //  https: true,
  },
  resolve: { // 此处
    alias: {
      // '@': path.resolve(__dirname, "src")
    }
  },
  build: {
    // 这里可以设置一些打包的配置，比如是否压缩代码，是否使用 sourcemap 等等
    // 具体配置可以参考 https://cn.vitejs.dev/config/#build-minify
    minify: false,
    sourcemap: true,
    // 这里可以设置一些路径别名，比如 @ 指向 src 目录
    // alias: {
    //   '@': path.resolve(__dirname, "src")
    // }


  }
})

