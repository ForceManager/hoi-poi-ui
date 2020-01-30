import React, { useState } from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import ButtonSwitch from '../../general/ButtonSwitch';

describe('Button', () => {
    test('is rendered without crashes', () => {
        const [value, setValue] = useState(false);
        const buttons = [
            {
                label: 'ON',
                value: true,
            },
            {
                label: 'OFF',
                value: false,
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <ButtonSwitch buttons={buttons} value={value} onChange={setValue}></ButtonSwitch>;
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
