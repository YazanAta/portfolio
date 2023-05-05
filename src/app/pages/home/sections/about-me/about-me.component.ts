import { Component } from '@angular/core';
@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
    getYearExperience(): string {
        let startDate: any = new Date('2023-03-01');
        let currentDate: any = new Date(new Date().valueOf() - startDate);
        let months: any = currentDate.getMonth() == 1 ? 'month' : 'months';
        let years: any = currentDate.toISOString().slice(0, 4) - 1970 < 2 ? 'year' : 'years';
        return `${currentDate.toISOString().slice(0, 4) - 1970} ${years} ${currentDate.getMonth()} ${months}`;
    }

    getAge(): string {
        let startDate: any = new Date('2002-02-02');
        let currentDate: any = new Date(new Date().valueOf() - startDate);
        return `${currentDate.toISOString().slice(0, 4) - 1970} years old`;
    }
}
