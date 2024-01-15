import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Carousel from '../Carousel';

describe('Carousel', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Carousel
                    placeholder="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    images={[
                        {
                            original: 'https://picsum.photos/1200/900',
                            thumbnail: 'https://picsum.photos/1200/900',
                        },
                        {
                            original: 'https://picsum.photos/1000/900',
                            thumbnail: 'https://picsum.photos/1200/900',
                        },
                        {
                            original: 'https://picsum.photos/400/400',
                            thumbnail: 'https://picsum.photos/1200/900',
                        },
                        {
                            original: 'https://picsum.photos/200/600',
                            thumbnail: 'https://picsum.photos/1200/900',
                        },
                    ]}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
