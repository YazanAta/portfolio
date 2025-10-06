import { Component } from '@angular/core';
import { Certification } from '../../../../models/certification.model';
import { CertificationsService } from '../../../../shared/services/certifications.service';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
    certifications: Certification[] = [];

    constructor(private readonly certificationsService: CertificationsService) {
        this.certifications = this.certificationsService.getAll();
    }
}


