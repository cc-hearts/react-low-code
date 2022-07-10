/**
 * @author heart
 * @description 用于制作页面跳转的类
 * @Date 2022-05-01
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import RefDemo from './view/ref/pageRefForWord'
import Children from './view/children'
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* index 为索引路由 */}
        <Route path='/' element={<Children />}>
          <Route index element={<Login />} />
          <Route path='ref' element={<RefDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
