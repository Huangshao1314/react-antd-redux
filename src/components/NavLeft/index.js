import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuConfig from './../../config/menuConfig'
import { switchMenu } from './../../redux/action'
import './index.less'
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
    constructor(props, context) {
      super(props, context)
      let temp=!this.props.collapedFlag;
      let dis=temp?'none':'block';
      this.state = {
        currentKey: '',
        style: {display: dis }
      };
    }

    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key == this.state.currentKey) {
            return false;
        }

        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.name));

        this.setState({
            currentKey: key
        });
        // hashHistory.push(key);
    };
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        console.log("this.state",this.state);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key}
                        title={ item.icon?<frameElement><Icon type={item.icon}/><span>{item.title}</span></frameElement>:item.title }
                    >
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key} name={item.title}>
                <Link to={item.key}>
                    { item.icon?<frameElement><Icon type={item.icon}/><span>{item.title}</span></frameElement>:item.title}
                </Link>
            </Menu.Item>
        })
    }
    homeHandleClick = () => {
        this.setState({
            currentKey: ""
        });
    };
    render() {
        const { collapedFlag } = this.props;
        return (
            <div>
                <NavLink to="/home" onClick={this.homeHandleClick}>
                    <div className="logo">
                        <img src="assets/logo-ant.svg" alt=""/>
                        <span>{ collapedFlag || 'Shared Bicycle MS' }</span>
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

const mapStateToProps = state => {
  return {
    collapedFlag: state.collapedFlag
  }
};
export default connect(mapStateToProps)(NavLeft)