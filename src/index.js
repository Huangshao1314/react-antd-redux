import React from 'react';
import ReactDOM from 'react-dom';
import './router';
import * as serviceWorker from './serviceWorker';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { withRouter } from "react-router";
import App from './layouts';

export default withRouter((props) => {
  return (
    <LocaleProvider locale={enUS}>
      <App>
        { props.children }
      </App>
    </LocaleProvider>
  )
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
