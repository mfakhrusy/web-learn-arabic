// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('babel-register')();

configure({ adapter: new Adapter() });