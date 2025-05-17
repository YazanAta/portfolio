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
            icon: 'coding',
            title: 'Core Development Skills',
            skills: [
                'HTML5',
                'CSS',
                'SCSS',
                'JavaScript',
                'TypeScript',
                'Angular',
                'RxJS',
                'Java',
                'Springboot',
                'MYSQL',
                'SQL Server',
                'Firebase',
                'IBM App Connect',
                'IBM MQ'
            ],
        },
        {
            icon: 'design',
            title: 'Design & UI/UX',
            skills: ['Tailwind', 'Bootstrap', 'FontAwesome'],
        },
        {
            icon: 'collaboration',
            title: 'Productivity & Collaboration Tools',
            skills: ['Jira', 'Slack'],
        },
        {
            icon: 'tools',
            title: 'Development Tools & Environment',
            skills: ['VS Code', 'IntelliJ IDEA', 'Git Extensions', 'npm', 'maven'],
        },
    ];
}
