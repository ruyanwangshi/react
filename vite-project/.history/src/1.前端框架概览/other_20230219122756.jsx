import React from 'react'
import { useNavigate } from 'react-router-dom'
import { initState } from '@/utils'

const cache = {

}

function stateCache() {
    
}

function OtherPage() {
  const routeLink = useNavigate()
  const [state, setState] = React.useState(123)

  initState('other页面数据').then((res) => {
    setState(res)
  })

  function click(path) {
    routeLink('/')
  }

  return (
    <div>
      <div onClick={click}>去home页面</div>
      <div>{state}</div>
    </div>
  )
}

export default OtherPage
