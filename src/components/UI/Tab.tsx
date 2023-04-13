import React, {type FC} from 'react'
import type { TabsEditor } from '~/constants'

export interface ITab {
    handleClick : () => void
    tab: TabsEditor
}

export const Tab : FC<ITab> = () => {
  return (
    <div>Tab</div>
  )
}

