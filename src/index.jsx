import React from 'react';

import { render } from 'react-dom';

import { App } from './App';
import 'antd/dist/antd.css';


// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(<App />, document.getElementById('app')
);