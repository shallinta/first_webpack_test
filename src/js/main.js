import React from 'react';
import {Log} from './common/util';
import Greetings from '../jsx/Hello';
import style from '../css/style.less';


React.render(<Greetings name="John" time="2015.8.21 17:27" />, document.getElementsByTagName('body')[0]);
Log("ready");
