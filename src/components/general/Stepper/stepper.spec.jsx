import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Stepper from '.';

describe('Tabs', () => {
    test('default', () => {
        let steps = [
            {
                title: 'Step 1',
            },
            {
                title: 'Step 2',
            },
            {
                title: 'Step 3',
            },
            {
                title: 'Step 4',
            },
            {
                title: 'Step 5',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Stepper currentStep={0} steps={steps} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with vertical labels', () => {
        let steps = [
            {
                title: 'Step 1',
            },
            {
                title: 'Step 2',
            },
            {
                title: 'Step 3',
            },
            {
                title: 'Step 4',
            },
            {
                title: 'Step 5',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Stepper currentStep={0} steps={steps} labelPlacement="vertical" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('without labels', () => {
        let steps = [
            {
                title: 'Step 1',
            },
            {
                title: 'Step 2',
            },
            {
                title: 'Step 3',
            },
            {
                title: 'Step 4',
            },
            {
                title: 'Step 5',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Stepper currentStep={0} steps={steps} withoutLabels />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with completed', () => {
        let steps = [
            {
                title: 'Step 1',
                isCompleted: true,
            },
            {
                title: 'Step 2',
                isCompleted: true,
            },
            {
                title: 'Step 3',
            },
            {
                title: 'Step 4',
            },
            {
                title: 'Step 5',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Stepper currentStep={3} steps={steps} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
