import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
    state = {
        currentKey: ''
    }
    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key == this.state.currentKey) {
            return false;
        }

        this.setState({
            currentKey: key
        });
        // hashHistory.push(key);
    };
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
        })
    }
    homeHandleClick = () => {
        this.setState({
            currentKey: ""
        });
    };
    render() {
        return (
            <div>
                <NavLink to="/home" onClick={this.homeHandleClick}>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Shared Bicycle MS</h1>
                    </div>
                </NavLink>
                <Menu
                    onClick={this.handleClick}
                    theme="dark"
                    mode="inline"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft)