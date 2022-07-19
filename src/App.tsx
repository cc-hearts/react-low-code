/**
 * @author heart
 * @description 用于制作页面跳转的类
 * @Date 2022-05-01
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import RefDemo from './view/ref/pageRefForWord'
import Children from './view/children'
import StateDemo from './view/hooks/useState'
import Reducer from './view/hooks/useReducer'
import Callback from './view/hooks/useCallback'
import Memo from './view/hooks/useMemo'
import Effect from './view/hooks/useEffect'
import ImperativeHandle from './view/hooks/useImperativeHandle'
import Scroll from './pages/scroll/index'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* index 为索引路由 */}
        <Route path='/' element={<Children />}>
          <Route index element={<Login />} />
          <Route path='ref' element={<RefDemo />} />
          <Route path='state' element={<StateDemo />} />
          <Route path='reducer' element={<Reducer />} />
          <Route path='callback' element={<Callback />} />
          <Route path='memo' element={<Memo />} />
          <Route path='effect' element={<Effect />} />
          <Route path='ImperativeHandle' element={<ImperativeHandle />} />
          <Route path='scroll' element={<Scroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
