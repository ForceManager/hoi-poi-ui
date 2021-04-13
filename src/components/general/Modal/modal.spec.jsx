import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Modal from '../../general/Modal';

describe('Modal', () => {
    test('with different sizes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Modal title="Lorem modal" isOpen={true}>
                    Default
                </Modal>
                <Modal title="Lorem modal" size="small" isOpen={true}>
                    Small
                </Modal>
                <Modal title="Lorem modal" size="large" isOpen={true}>
                    Large
                </Modal>
                <Modal title="Lorem modal" size="big" isOpen={true}>
                    Big
                </Modal>
                <Modal title="Lorem modal" size="full" isOpen={true}>
                    Full
                </Modal>
            </HoiPoiProvider>,
        );
        expect(wrapper.find('.ReactModal__Content').contains('Lorem ipsum')).toEqual(true);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('without header', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Modal title="Lorem modal" isOpen={true} useHeader={false}>
                    Lorem Ipsum
                </Modal>
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('like a confirm modal', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Modal
                    title="Lorem modal"
                    isOpen={true}
                    onCancel={() => alert('Canceled!')}
                    onConfirm={() => {
                        alert('Confirmed!');
                    }}
                    cancelText="Cancel"
                    confirmText="Confirm"
                >
                    Lorem Ipsum
                </Modal>
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
