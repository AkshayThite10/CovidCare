import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });
describe('Header', () => {
    it('should show the text1', () => {
        const headerInstance = shallow(<Header />);
        const element = headerInstance.find('[id="s1"]');
        expect(element.text()).toBe('CovidCare');

    });

    it('should show the text2', () => {
        const headerInstance = shallow(<Header />);
        const element = headerInstance.find('[id="s2"]');
        expect(element.text()).toBe('Good Health is above Wealth!!');

    });
});