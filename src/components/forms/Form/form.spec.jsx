import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Form from './index';
import schema from './example.json';

describe('Form', () => {
    test('complete match', () => {
        const errors = {
            phone: 'Invalid phone',
        };

        const wrapper = mount(
            <HoiPoiProvider>
                <Form errors={errors} schema={schema} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
