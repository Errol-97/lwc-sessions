import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResults = [];
    @track showPrev = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const name = event.target.name;

        if(name == 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(name == 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = `Result of adding ${firstNum} and ${secondNum} is ${firstNum + secondNum}`;//have to use back ticks ` to use temlate literals
        this.previousResults.push(this.currentResult);
    }
    
    
    subtractHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstNum} - ${secondNum} is ${firstNum - secondNum}`;//have to use back ticks ` to use temlate literals
        this.previousResults.push(this.currentResult);
    }
    
    multiplyHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`;//have to use back ticks ` to use temlate literals
        this.previousResults.push(this.currentResult);

    }
    
    divideHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = `Result of dividing ${firstNum} by ${secondNum} is ${firstNum / secondNum}`;//have to use back ticks ` to use temlate literals
        this.previousResults.push(this.currentResult);

    }

    showPrevToggle(event){
        this.showPrev = event.target.checked;
    }
}