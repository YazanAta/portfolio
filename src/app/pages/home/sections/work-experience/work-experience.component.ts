import { Component } from '@angular/core';

import { WorkExperience } from 'src/app/models/work-experience.model';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
    workExperience: WorkExperience[] = [
        {
            startDate: 'March 1, 2023',
            endDate: 'Present',
            position: 'Front-End Web Developer',
            company: 'Integral Ways (Full Time)',
            companyWebsite: '',
            jobDescriptions: [
                'Collaborated with a team of developers to build and maintain a web application using Angular',
                'Gain knowledge of using ApexCharts library to visulalize the data',
                'Developed responsive blog templates.',
                'Use of Jira and Confluence to keep work status and technical documentation updated.',
            ],
        },
    ];
}
