import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { renderRoutes } from 'react-router-config';
// import renderRoutes from '../utils/renderRoutes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import routes from '../router';
import "antd/dist/antd.css";
import './index.css';

const { Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

// const authed = false;
// const authPath = '/login';

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      collapsed: false,
      style: {opacity: 1 }
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    if (this.state.style.opacity === 0) {
      this.setState({ style: {opacity: 1 } })
    } else {
      this.setState({ style: {opacity: 0 } })
    }
  }

  componentWillMount(){
    debugger;
    console.log(routes);
    console.log(renderRoutes(routes));
  }

  render () {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width={200} style={{ background: '#fff' }}
          >
            <div className="logo" />
            <Menu mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <Menu.Item key="13">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="14">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="15">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="user"/><span style={this.state.style} className="subMenuSpan">subnav 1</span></span>}>
                <Menu.Item key="1">
                  <Link to ="/test">option1</Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to ="/home">option2</Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link to ="/login">option3</Link>
                </Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop"/><span style={this.state.style} className="subMenuSpan">subnav 1</span></span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification"/><span style={this.state.style} className="subMenuSpan">subnav 1</span></span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px 0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <TransitionGroup>
                <CSSTransition
                  // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
                  // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
                  // key={location.pathname}
                  // classNames 就是设置给css动画的标示，记得'classNames'带's'的。
                  classNames="fade"
                  // 动画时间设置为800ms，和css中的需要一致。
                  timeout={800}
                  appear = {true}
                >
                  {renderRoutes(routes)}
                </CSSTransition>
              </TransitionGroup>
            </Content>
            <Footer style={{ textAlign: 'center', padding: '15px 0' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
