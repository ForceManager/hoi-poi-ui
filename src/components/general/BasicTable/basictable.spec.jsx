import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Icon from '../Icon';
import Text from '../../typography/Text';
import BasicTable from '.';

describe('BasicTable', () => {
    test('default table', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <BasicTable
                    columns={[
                        { label: 'Description', id: 'label' },
                        { label: 'value', id: 'value' },
                        { label: 'Featured', id: 'isFeatured' },
                    ]}
                    rows={[
                        {
                            label: <Text>Cell1</Text>,
                            value: 1,
                            isFeatured: <Icon name="starBorder" />,
                        },
                        {
                            value: 2,
                            label: 'Cell2',
                            isFeatured: <Icon name="starBorder" />,
                        },
                        {
                            value: 4,
                            label: 'Cell3',
                            isFeatured: <Icon name="star" />,
                        },
                    ]}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with headers', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <BasicTable
                    columns={[
                        { label: 'Description', id: 'label' },
                        { label: 'value', id: 'value' },
                        { label: 'Featured', id: 'isFeatured' },
                    ]}
                    rows={[
                        {
                            label: <Text>Cell1</Text>,
                            value: 3,
                            isFeatured: <Icon name="starBorder" />,
                        },
                        {
                            value: 5,
                            label: 'Cell2',
                            isFeatured: <Icon name="starBorder" />,
                        },
                        {
                            value: 7,
                            label: 'Cell3',
                            isFeatured: <Icon name="star" />,
                        },
                    ]}
                    withHeaders
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
