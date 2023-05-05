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
            title: 'Coding',
            skills: [
                'Angular',
                'Springboot',
                'Java',
                'JavaScript',
                'TypeScript',
                'HTML5',
                'CSS',
                'SCSS',
                'RxJS',
                'SQL',
                'C#',
            ],
        },
        {
            icon: 'global',
            title: 'Design Language',
            skills: ['Tailwind', 'Bootstrap'],
        },
        {
            icon: 'android',
            title: 'Applications',
            skills: ['VS Code', 'IntelliJ IDEA', 'Git Extensions', ' XAMPP', 'Jira'],
        },
    ];
}
