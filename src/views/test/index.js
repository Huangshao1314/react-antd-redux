import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

//定义两个无状态组件
function tecDep() {
  return <h2>技术部</h2>
}
function HRDep() {
  return <h2>人事部</h2>
}

class App extends Component {
  render(){
    return(
      <div>
        {/* 指定路由跳转的导航 */}
        <ul>
          <li>
            <Link to='/dashboard'>总部</Link>
          </li>
          <li>
            <Link to='/dashboard/tecDep'>技术部</Link>
          </li>
          <li>
            <Link to='/dashboard/HRDep'>人事部</Link>
          </li>
        </ul>
        <Route path='/dashboard/tecDep' component={tecDep}></Route>
        <Route path='/dashboard/HRDep' component={HRDep}></Route>
      </div>
    )
  }
}

export default App
