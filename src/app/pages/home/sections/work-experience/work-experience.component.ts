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
            position: 'Front-End Web Developer',
            company: 'Integral Ways (Remotely)',
            companyWebsite: 'https://integralways.com/',
            jobDescriptions: [
                'Collaborated with a team of developers to build and maintain a web application using Angular',
                'Gain knowledge of using ApexCharts library to visulalize the data',
                'Developed responsive blog templates.',
                'Use of Jira and Confluence to keep work status and technical documentation updated.',
            ],
        },
        {
            startDate: 'July 2, 2023',
            endDate: 'August 10, 2023',
            position: 'Java Development Internship',
            company: 'Eskadenia Software (Part Time)',
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
                'Worked on developing and maintaining enterprise integration applications using IBM App Connect Enterprise (ACE)',
                'Integrated services with IBM MQ for reliable messaging and asynchronous communication between systems',
                'Designed and consumed stored procedures in SQL Server to handle complex business logic and data transformations',
                'Performed effective troubleshooting and debugging across message flows, ESQL logic, and backend interactions',
            ],
        },
    ];
}
