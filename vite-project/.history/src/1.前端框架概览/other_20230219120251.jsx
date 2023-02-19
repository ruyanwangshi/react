import React from 'react'
import { useRouterTo } from '@/utils/routerHooks'
import { initState } from '@/utils'

function OtherPage() {
  const [state, setState] = React.useState(123)

  initState('home页面数据').then((res) => {
    setState(res)
  })

  return (
    <div>
      <div onClick={() => useRouterTo('/home')}>去home页面</div>
      <div>{state}</div>
    </div>
  )
}

export default OtherPage
