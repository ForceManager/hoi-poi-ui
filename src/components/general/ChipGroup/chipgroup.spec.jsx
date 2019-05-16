import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import ChipGroup from '.';

describe('ChipGroup', () => {
    test('Chips with and without picture', () => {
        const chipProps = [
            {
                label: 'Lorena Smith',
                url: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
            },
            {
                label: 'Dani Balastegui',
            },
            {
                label: 'Jordi Gandia',
                url:
                    'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1',
            },
            {
                label: 'John Smith',
                url:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRp4kKC007NfgaXHB9WubLDpIS5DwEu-qbQkvjY5stXZFYo-dM',
            },
            {
                label: 'Jordi Gandia',
            },
        ];
        const wrapper = mount(
            <HoiPoiProvider>
                <ChipGroup chips={chipProps} />;
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
