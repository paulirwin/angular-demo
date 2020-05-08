import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
    public forecasts: WeatherForecast[];

    constructor(private http: HttpClient) {
    }

    async ngOnInit() {
        try {
            this.forecasts = await this.http
                .get<WeatherForecast[]>(environment.apiUrl + '/weatherforecast')
                .toPromise();
        } catch (error) {
            console.error(error);
        }
    }
}

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
