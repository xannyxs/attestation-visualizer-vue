import { ref } from 'vue'
import { ActiveView } from '~/utils/types.d'

export const expanded = ref(false)
export const curActiveView = ref(ActiveView.None)
