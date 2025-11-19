import { reactive, watch } from 'vue'
import { load, save } from '../utils/storage'
export function useProgress(){
  const state = reactive(load('codequest.v1', { lessons: [] }))
  watch(state, s=> save('codequest.v1', s), { deep: true })
  return state
}