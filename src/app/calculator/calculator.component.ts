import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-calculator',
    standalone: true,
    imports: [MatGridListModule, MatButtonModule, FormsModule],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
    // input and result properties
    input: string = '';
    result: string = '';
    show_operation = '0';

    // method to append a number or a dot to the input
    pressNum(num: string) {
        // if input is not empty and it is 0, replace it with num
        if (this.input !== '' && this.input === '0') {
            this.input = num;
        } else {
            // else append num to the input
            this.input = this.input + num;
        }
        this.show_operation = this.input;
    }

    // method to append an operator to the input
    pressOperator(op: string) {
        // if input is not empty and it does not end with an operator, append op to the input
        if (
            this.input !== '' &&
            !this.isOperator(this.input[this.input.length - 1])
        ) {
            this.input = this.input + op;
        }
        this.show_operation = this.input;
    }

    // method to clear both input and result
    allClear() {
        this.input = '';
        this.result = '';
        this.show_operation = '0';
    }

    // method to clear the last character of the input
    clear() {
        // if input is not empty, remove the last character
        if (this.input !== '') {
            this.input = this.input.slice(0, -1);
        }
        this.show_operation = this.input;
    }

    // method to calculate the result
    getAnswer() {
        // if input is not empty and it does not end with an operator, evaluate the input and assign the result
        if (
            this.input !== '' &&
            !this.isOperator(this.input[this.input.length - 1])
        ) {
            this.result = eval(this.input);
        }
        this.show_operation = this.result;
        this.input = '';
        this.result = '';
    }

    // helper method to check if a character is an operator
    isOperator(char: string) {
        return char === '+' || char === '-' || char === '*' || char === '/';
    }
}
