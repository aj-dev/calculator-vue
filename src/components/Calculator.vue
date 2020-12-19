<template>
    <div class="calculator">
        <div class="calculator__header">
            <img src="@/assets/logo.svg" alt="[=] Equal Experts" class="calculator__logo">
        </div>
        <div class="calculator__display">{{ displayValue }}</div>
        <div class="calculator__keys">
            <button v-for="key in keys"
                    :key="key.value"
                    class="calculator__key"
                    :class="{'calculator__key--large': key.value === 'C' || key.value === 0, 'calculator__key--clear': key.value === 'C'}"
                    @click="handleKeyPress(key)">
                {{ key.value }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',

    data() {
        return {
            displayValue: 0,
            previousKeyType: '',
            previousValue: 0,
            previousOperator: '',
            keys: [
                {
                    value: 'C',
                    type: 'operator'
                },
                {
                    value: '%',
                    type: 'operator'
                },
                {
                    value: '÷',
                    type: 'operator'
                },
                {
                    value: 7,
                    type: 'operand'
                },
                {
                    value: 8,
                    type: 'operand'
                },
                {
                    value: 9,
                    type: 'operand'
                },
                {
                    value: '×',
                    type: 'operator'
                },
                {
                    value: 4,
                    type: 'operand'
                },
                {
                    value: 5,
                    type: 'operand'
                },
                {
                    value: 6,
                    type: 'operand'
                },
                {
                    value: '-',
                    type: 'operator'
                },
                {
                    value: 1,
                    type: 'operand'
                },
                {
                    value: 2,
                    type: 'operand'
                },
                {
                    value: 3,
                    type: 'operand'
                },
                {
                    value: '+',
                    type: 'operator'
                },
                {
                    value: 0,
                    type: 'operand'
                },
                {
                    value: ',',
                    type: 'operand'
                },
                {
                    value: '=',
                    type: 'operator'
                }
            ]
        }
    },

    methods: {
        handleKeyPress(key) {
            const {value, type} = key;
            let newValue = this.displayValue;

            if (type === 'operand' && !isNaN(Number(value))) {
                newValue = this.previousKeyType === 'operator' ? value : Number(`${this.displayValue}${Number(value)}`);
            } else {
                switch (value) {
                    case '+':
                    case '-':
                    case '×':
                    case '÷':
                        this.previousDisplayValue = this.displayValue;
                        this.previousOperator = value;
                        break;
                    case ',':
                        // TODO
                        break;
                    case 'C':
                        newValue = 0;
                        break;
                    case '=':
                        newValue = this.calculate(this.previousDisplayValue, this.previousOperator, this.displayValue);
                        break;
                    default:
                        break;
                }
            }

            // Store key type
            this.previousKeyType = type;

            // Update display value
            this.displayValue = newValue;
        },

        calculate(firstValue, operator, secondValue) {
            let result;

            switch (operator) {
                case '+':
                    result = this.add(firstValue, secondValue);
                    break;
                case '-':
                    result = this.subtract(firstValue, secondValue);
                    break;
                case '×':
                    result = this.multiply(firstValue, secondValue);
                    break;
                case '÷':
                    result = this.divide(firstValue, secondValue);
                    break;
                default:
                    break;
            }

            return result;
        },

        add(firstValue, secondValue) {
            return firstValue + secondValue;
        },

        subtract(firstValue, secondValue) {
            return firstValue - secondValue;
        },

        multiply(firstValue, secondValue) {
            return firstValue * secondValue;
        },

        divide(firstValue, secondValue) {
            return firstValue / secondValue;
        }
    }
}
</script>

<style scoped lang="scss">
.calculator {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    padding: .5rem;
    width: 320px;
    border: 1px solid #373D45;
    border-radius: 5px;
}

.calculator__header {
    background-color: #1795d4;
    display: flex;
    justify-content: center;
}

.calculator__logo {
    background-color: #1795d4;
    width: 4rem;
    padding: .5rem;
}

.calculator__display {
    background-color: #373D45;
    border: none;
    box-shadow: none;
    outline: none;
    padding: 1rem;
    color: #ffffff;
    text-align: right;
    font-size: 40px;
    border-radius: 0;
    margin: 0;
}

.calculator__keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.calculator__key {
    background-color: #1895D4;
    border: 1px solid #ffffff;
    padding: 20px;
    color: #ffffff;
    font-size: 22px;
    cursor: pointer;
    outline: none;
}

.calculator__key--clear {
    background-color: #196b98;
}

.calculator__key--large {
    grid-column: span 2;
}
</style>
