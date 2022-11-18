import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import FilePicker from '.';

describe('Input', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FilePicker
                    label="File"
                    placeholder="Drag and drop or click to upload"
                    placeholderActive="Drop file to upload"
                    onDrop={() => {}}
                    onRemove={() => {}}
                    files={[]}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with limit', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FilePicker
                    label="File"
                    placeholder="Drag and drop or click to upload"
                    placeholderActive="Drop file to upload"
                    onDrop={() => {}}
                    onRemove={() => {}}
                    files={[]}
                    limit={1}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with accept', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FilePicker
                    label="File"
                    placeholder="Drag and drop or click to upload"
                    placeholderActive="Drop file to upload"
                    onDrop={() => {}}
                    onRemove={() => {}}
                    files={[]}
                    accept={['application/zip', 'application/vnd.rar']}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is full width match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FilePicker
                    label="File"
                    placeholder="Drag and drop or click to upload"
                    placeholderActive="Drop file to upload"
                    onDrop={() => {}}
                    onRemove={() => {}}
                    files={[]}
                    isFullWidth={true}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('vertical label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <FilePicker
                    label="File"
                    labelMode="vertical"
                    placeholder="Drag and drop or click to upload"
                    placeholderActive="Drop file to upload"
                    onDrop={() => {}}
                    onRemove={() => {}}
                    files={[]}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
