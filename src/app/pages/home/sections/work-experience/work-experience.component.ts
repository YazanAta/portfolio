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
            endDate: 'February 2, 2024',
            position: 'Web Developer',
            company: 'Integral Ways (Remote)',
            companyWebsite: 'https://integralways.com/',
            jobDescriptions: [
                'Developed and maintained web applications using Angular, managing application state with NGXS.',
                'Integrated front-end with back-end services to fetch data, submit forms, and implement authentication flows.',
                'Developed backend services for authentication using OAuth2 and JWT.',
                'Supported the development of mobile applications using Ionic.',
                'Worked with ApexCharts to visualize data effectively.',
                'Built responsive blog templates for optimal user experience across devices.',
                'Used Jira and Confluence to track work progress and maintain technical documentation.',
            ],
        },
        {
            startDate: 'July 2, 2023',
            endDate: 'August 10, 2023',
            position: 'Java Development Internship',
            company: 'Eskadenia Software',
            companyWebsite: 'https://www.eskadenia.com/',
            jobDescriptions: [
                'Refreshed my understanding of Object-Oriented Programming (OOP), solidifying my foundation in this essential concept',
                'Gained valuable insights into the Collections framework, enhancing my ability to manage and manipulate data effectively',
                'Explored File I/O operations, learning how to read from and write to files efficiently',
                'Explored network protocols like Telnet, Sockets, and FTP, broadening my knowledge of communication methods in the digital Realm',
                'Took on the exciting challenge of implementing a program for FTP, enabling seamless uploading and downloading of files from servers'
            ],
        },
        {
            startDate: 'Oct 10, 2024',
            endDate: 'Current',
            position: 'Software Developer',
            company: 'Inspire for Solutions Development',
            companyWebsite: 'https://inspirejo.com/',
            jobDescriptions: [
                'Worked as an Integration Developer on enterprise applications for the Work Permits module.',
                'Developed and maintained integration flows and scheduled tasks for work permit processing and calculations.',
                'Integrated systems with payment and billing platforms to generate invoices and manage transactions.',
                'Designed and consumed SQL Server stored procedures to implement complex business logic and data transformations.',
                'Managed version control using GitLab and deployed applications on OpenShift.',
                'Worked with IBM MQ for reliable messaging and asynchronous communication between systems.',
                'Performed troubleshooting and debugging across message flows, backend integrations, and database interactions.',
                'Applied critical thinking and problem-solving to ensure reliable and efficient system operation.',
            ],
        },
    ];
}
