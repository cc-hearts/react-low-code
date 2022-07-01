/**
 * @author heart
 * @description 用于制作页面跳转的类
 * @Date 2022-05-01
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeIndex from './home'
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeIndex />} />
      </Routes>
    </BrowserRouter>
  )
}
