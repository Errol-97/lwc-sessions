import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;

    @track cityList = ['columbia', 'Charleston', 'Greenville', 'Orangeburg', 'Lexington'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}