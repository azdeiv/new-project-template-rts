import React from 'react';
import ReactDOM from 'react-dom';
// import {Button} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';

// import {config} from 'overmind-local';
import App from 'components/App/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main';

library.add(faInfoCircle);

ReactDOM.render(<App />, document.getElementById('app'));
