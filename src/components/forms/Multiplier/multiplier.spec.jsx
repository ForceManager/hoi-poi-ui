import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Multiplier from './index';
import schema from './example.json';

describe('Multiplier', () => {
    test('complete match', () => {
        const errors = {
            email: 'Invalid email',
        };

        const buttonLabel = 'Add';

        const buttonClassName = 'addButton';

        const wrapper = mount(
            <HoiPoiProvider>
                <Multiplier
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
