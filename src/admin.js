import React from 'react'
import { Row, Col, Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import { connect } from 'react-redux'
import NavLeft from './components/NavLeft'
import './style/common.less'

const { Header, Sider, Content, Footer} = Layout;

class Admin extends React.Component{
    state = {
      collapsed: false,
    }
    render(){
        return (
          <Layout className="container" style={{ minHeight: '100vh' }}>
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                className="nav-left"
                width={223}
              >
                <NavLeft/>
              </Sider>
              <Layout className="main" style={{ minHeight: '100vh' }}>
                <Header>
                  <MyHeader/>
                </Header>
                <Content className="content">
                  {this.props.children}
                  <MyFooter/>
                </Content>
              </Layout>
            </Layout>
        );
    }
}
export default connect()(Admin)