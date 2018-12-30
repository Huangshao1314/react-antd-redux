import React from 'react'
import './index.less'
export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
              { 'Ant Design ©2018' + (new Date().getFullYear()==2018?'':('-' + new Date().getFullYear())) + ' Created by Ant UED' }
            </div>
        );
    }
}