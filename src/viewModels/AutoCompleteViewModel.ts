import { makeAutoObservable } from "mobx";
import { countryStore } from "../store/CountryStore";

export class AutoCompleteViewModel {
    input: string = "";
    maxSuggestions: number = 5;
    private debounceTimeout: NodeJS.Timeout | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    updateInput(newInput: string) {
        this.input = newInput;

        if(this.debounceTimeout) clearTimeout(this.debounceTimeout);

        this.debounceTimeout = setTimeout(() => {
            this.fetchSuggestions(newInput);            
        }, 300);
    }

    setMaxSuggestions(max: number) {
        this.maxSuggestions = max;
    }

    get suggestions() {
        console.log("get")
        return countryStore.countries.slice(0, this.maxSuggestions);
    }

    async fetchSuggestions(query: string) {
        if (query) {
            await countryStore.fetchCountries(query);
        } else {
            countryStore.clearCountries();
        }
    }
}