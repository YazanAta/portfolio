import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './shared/services/analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';

    constructor(private analytics: AnalyticsService) { }

    ngOnInit(): void {
        this.analytics.trackVisit();
    }
}
