import { ActiveView } from '~/utils/types.d'

export const g_useExpanded = useState<boolean>('expanded', () => false)
export const g_useActiveView = useState<ActiveView>('activeView', () => ActiveView.None)
