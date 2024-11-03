import { makeAutoObservable } from "mobx";

export interface ButtonProps {
    text: string;
    callback: () => void;
}

export class ButtonControlViewModel {
    text: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setText(newText: string) {
        this.text = newText;
    }
    
    clearText() {
        this.text = "";
    }
    
    setTextToHelloWorld() {
        this.text = "Hello World!";
    }

    showAlert() {
        alert(this.text);
    }

    checkAndAlertNumber() {
        if (!isNaN(Number(this.text))) {
            alert(this.text);
        }
    }
}