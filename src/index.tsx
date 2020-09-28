import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

import App from 'components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main';

library.add(faInfoCircle);

ReactDOM.render(<App />, document.getElementById('app'));
