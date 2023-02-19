import React from 'react'
import { useRouterTo } from '@/utils/hooks'
import {
    initState
} from '@/utils'


function TestMemo() {
    const [state, setState] = React.useState(123)


    initState('home页面数据').then((res) => {
        setState(res)
    })
    
    return (
        <div>
            <div onClick={useRouterTo('/other')}>去other页面</div>
            {state}
        </div>
    )
}



export default TestMemo