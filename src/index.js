import React from 'react';
import ReactDOM from 'react-dom';

// 设置antd语言为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
// 设置日期显示为中文
import moment from 'moment';
import 'moment/locale/zh-cn';

import {
  LocaleProvider
} from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  Login,
  NotFound
} from './pages'

import App from './App';

import * as http from './requests'
React.Component.prototype.http = http

moment.locale('zh-cn');

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route path="/admin" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/admin" from="/" exact />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </LocaleProvider>,
  document.getElementById('root')
);
