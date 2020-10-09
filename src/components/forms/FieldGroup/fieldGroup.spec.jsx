import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import FieldGroup from '.';
import Input from '../Input';
import Icon from '../../general/Icon';

describe('Input', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FieldGroup label="Label" inputs={[Input, Input]} value={['Hello', 'World']} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('horizontal', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FieldGroup
                    label="Label"
                    labelMode="horizontal"
                    inputs={[Input, Input]}
                    value={['Hello', 'World']}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('full width with divider', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FieldGroup
                    label="Label"
                    inputs={[Input, Input]}
                    value={['Hello', 'World']}
                    isFullWidth
                    dividerText="-"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('multiple fields with custom dividers', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FieldGroup
                    label="Label"
                    inputs={[Input, Input, Input, Input, Input, Input]}
                    value={['Hello', 'World']}
                    divider={<Icon name="arrowRight" />}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('customizing props', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FieldGroup
                    label="Label"
                    inputs={[Input, Input, Input, Input, Input, Input]}
                    inputProps={[
                        { placeholder: 'Field 1' },
                        { placeholder: 'Field 2' },
                        { placeholder: 'Field 3' },
                        { placeholder: 'Field 4' },
                        { placeholder: 'Field 5' },
                        { placeholder: 'Field 6' },
                    ]}
                    value={['Hello', 'World']}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
