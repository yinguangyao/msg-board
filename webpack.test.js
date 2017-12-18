const Enzyme = require('enzyme'),
    Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() });

const context = require.context('./app/test', true, /test\.js$/);
context.keys().forEach(context);