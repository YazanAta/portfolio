import { Component } from '@angular/core';
import { TechnicalSkills } from 'src/app/models/technical-skills.model';

@Component({
    selector: 'app-technical-skills',
    templateUrl: './technical-skills.component.html',
    styleUrls: ['./technical-skills.component.scss'],
})
export class TechnicalSkillsComponent {
    technicalSkills: TechnicalSkills[] = [
        {
            icon: 'frontend',
            title: 'Frontend Development',
            skills: [
                'HTML5',
                'CSS',
                'SCSS',
                'JavaScript',
                'TypeScript',
                'Angular',
                'RxJS',
                'NgRx',
                'Tailwind',
                'Bootstrap',
                'FontAwesome'
            ],
        },
        {
            icon: 'coding',
            title: 'Backend Development',
            skills: [
                'Java',
                'Spring Boot',
                'Firebase',
                'IBM App Connect',
                'IBM API Connect',
                'IBM MQ'
            ],
        },
        {
            icon: 'cloud',
            title: 'Cloud & Platforms',
            skills: ['Google Cloud Platform (GCP)', 'OpenShift', 'ELK Stack'],
        },
        {
            icon: 'database',
            title: 'Databases',
            skills: ['MySQL', 'SQL Server'],
        },
        {
            icon: 'tools',
            title: 'Development Tools',
            skills: ['VS Code', 'IntelliJ IDEA', 'Git', 'Git Extensions', 'npm', 'Maven'],
        },
        {
            icon: 'collaboration',
            title: 'Collaboration Tools',
            skills: ['Jira', 'Slack'],
        },
    ];
}
