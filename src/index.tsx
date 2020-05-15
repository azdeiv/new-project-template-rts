import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';
// import {createOvermind} from 'overmind';

// import {config} from 'overmind-local';
import App from 'components/App/App';

import 'styles/main';

library.add(faInfoCircle);

// const overmind = createOvermind(config);

ReactDOM.render(<App />, document.getElementById('app'));
