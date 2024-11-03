import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class CountryStore {
    countries: CountryInfo[] = [];
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCountries(query: string) {
        this.loading = true;
        this.error = null;
        try {
            const response = await getCountryByName(query);
            runInAction(() => {
                this.countries = Array.from(new Set(response));
                console.log(Array.from(new Set(response)));
                this.loading = true;
            })
        } catch (error) {
            runInAction(() => {
                this.error = "Не удалось загрузить страны";
                this.loading = false;
            })
        }
    }

    clearCountries() {
        this.countries = [];
    }
}

export const countryStore = new CountryStore();