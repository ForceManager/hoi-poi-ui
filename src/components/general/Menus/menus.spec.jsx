import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider, Icon } from '../../../utils/styles';
import Menus from '../../general/Menus';

describe('Menus', () => {
    test('default with click', () => {
        const items = [
            {
                title: 'Create',
                icon: <Icon name="info" />,
                onClick: () => console.log('create'),
            },
            {
                title: 'Edit',
                icon: <Icon name="info" />,
                onClick: () => console.log('edit'),
            },
            {
                title: 'Delete',
                icon: <Icon name="info" />,
                onClick: () => console.log('delete'),
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Menus title="Menus" icon={<Icon name="threeDots" />} items={items} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('default with hover', () => {
        const items = [
            {
                title: 'Create',
                icon: <Icon name="info" />,
                onClick: () => console.log('create'),
            },
            {
                title: 'Edit',
                icon: <Icon name="info" />,
                onClick: () => console.log('edit'),
            },
            {
                title: 'Delete',
                icon: <Icon name="info" />,
                onClick: () => console.log('delete'),
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Menus
                    title="Menus"
                    icon={<Icon name="threeDots" />}
                    items={items}
                    triggerSubMenuAction="hover"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
