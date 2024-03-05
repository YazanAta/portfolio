import { Component } from '@angular/core';
import { MyProjects } from 'src/app/models/my-projects.model';

@Component({
    selector: 'app-my-projects',
    templateUrl: './my-projects.component.html',
    styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent {
    myProjects: MyProjects[] = [

        {
            image: 'logo.jpeg',
            title: 'Todo App',
            links: [
                {
                    url: 'https://todo-4a190.web.app/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://github.com/YazanAta/todo-angular-firebase.git',
                    text: 'Visit Github',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'javaFtp.webp',
            title: 'FTP Client',
            links: [
                {
                    url: 'https://github.com/YazanAta/Simple-FTP-Client.git',
                    text: 'Visit Github',
                },
            ],
            imagePosition: 'object-bottom',
        },

    ];

    showLimit: number = 6;
    showAllProjects(): void {
        this.showLimit = this.myProjects.length;
    }
}
