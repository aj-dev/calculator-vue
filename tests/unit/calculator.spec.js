import {shallowMount} from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Calculator);
    });

    it('initialises calculator with 0 display value', () => {
        expect(wrapper.vm.displayValue).toEqual(0);
    });

    it('displays key value when a button is pressed', () => {
        wrapper.vm.handleKeyPress({
            value: 8,
            type: 'operand'
        });

        expect(wrapper.vm.displayValue).toEqual(8);
    });

    it('resets to 0 when C is pressed', () => {
        wrapper.vm.handleKeyPress({
            value: 'C',
            type: 'operator'
        });

        expect(wrapper.vm.displayValue).toEqual(0);
    });

    it('adds 2 numbers', () => {
        wrapper.vm.handleKeyPress({
            value: 5,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '+',
            type: 'operator'
        });
        wrapper.vm.handleKeyPress({
            value: 10,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '=',
            type: 'operand'
        });

        expect(wrapper.vm.displayValue).toEqual(15);
    });

    it('subtracts 2 numbers', () => {
        wrapper.vm.handleKeyPress({
            value: 100,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '-',
            type: 'operator'
        });
        wrapper.vm.handleKeyPress({
            value: 20,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '=',
            type: 'operand'
        });

        expect(wrapper.vm.displayValue).toEqual(80);
    });

    it('multiplies 2 numbers', () => {
        wrapper.vm.handleKeyPress({
            value: 30,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '×',
            type: 'operator'
        });
        wrapper.vm.handleKeyPress({
            value: 5,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '=',
            type: 'operand'
        });

        expect(wrapper.vm.displayValue).toEqual(150);
    });

    it('divides 2 numbers', () => {
        wrapper.vm.handleKeyPress({
            value: 60,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '÷',
            type: 'operator'
        });
        wrapper.vm.handleKeyPress({
            value: 10,
            type: 'operand'
        });
        wrapper.vm.handleKeyPress({
            value: '=',
            type: 'operand'
        });

        expect(wrapper.vm.displayValue).toEqual(6);
    });
});
