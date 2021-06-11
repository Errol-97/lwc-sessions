import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    //when to use track: bc all props are now reactive, you only need to use track when exposing a non-primitive data type...such as an object as seen below
    @track bmiData = {
        weight: 0,
        height: 0,
        result: 0
    };

    onHeightChange(event){
        this.bmiData.height = event.target.value;
    }

    onWeightChange(event){
        this.bmiData.weight = event.target.value;
    }

    calculateBMI(){
        try{
            this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
        } catch(error){
            this.bmiData.result = undefined;
        }
    }

    //getter properties
    get bmiValue(){
        if(this.bmiData.result === undefined){
            return "";
        }
        return `Your BMI is: ${this.bmiData.result}`;
    }
}