 
import { createStore } from 'vuex'
 
interface Data {
    a: Number,
    b: String
}
 
export interface State {
    data: Data
}
 
const state: State = {
    data: {
        a: 111,
        b: '1',
    }
}
 
// 创建一个新的 store 实例
const store = createStore({
  state: state
})
 
export default store