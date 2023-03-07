import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import EllipsedInlineList from '../EllipsedInlineList';
import Text from '../../typography/Text';
import Tooltip from '../../utils/Tooltip';

// Define a dummy implementation of the ResizeObserver class
class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

describe('EllipsedInlineList', () => {

    window.ResizeObserver = ResizeObserverMock;

    test('default match', () => {
        const items = [
            'Amelia Matthews',
            'Leo Rodriguez',
            'Maya Patel',
            'Oscar Kim',
            'Alice Wong',
            'Lucas Foster',
            'Ava Thompson',
            'Gabriel Gonzalez',
            'Hazel Carter',
            'Isaac Davis',
        ];


        const wrapper = mount(
            <HoiPoiProvider>
                <EllipsedInlineList items={items} />
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with custom postcomponent match', () => {
        const items = [
            'Amelia Matthews',
            'Leo Rodriguez',
            'Maya Patel',
            'Oscar Kim',
            'Alice Wong',
            'Lucas Foster',
            'Ava Thompson',
            'Gabriel Gonzalez',
            'Hazel Carter',
            'Isaac Davis',
        ];

        const PostComponent = ({ count, className }) => {
            return (
                <Tooltip content={<span>Hello!</span>}>
                    <Text color="blue500" className={className}>
                        +{count}
                    </Text>
                </Tooltip>
            );
        };

        const wrapper = mount(
            <HoiPoiProvider>
                <EllipsedInlineList items={items} postComponent={PostComponent} />
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
