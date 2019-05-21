import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Repeater from './index';
import schema from './example.json';

describe('Repeater', () => {
    test('complete match', () => {
        const errors = {
            phone: 'Invalid phone',
        };

        const max = 10;

        const buttonLabel = 'Add';

        const buttonClassName = 'addButton';

        const wrapper = mount(
            <HoiPoiProvider>
                <Repeater
                    errors={errors}
                    schema={schema}
                    max={10}
                    buttonLabel={buttonLabel}
                    buttonClassName={buttonClassName}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
