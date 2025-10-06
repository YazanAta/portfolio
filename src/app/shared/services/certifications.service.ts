import { Injectable } from '@angular/core';
import { Certification } from '../../models/certification.model';

@Injectable({ providedIn: 'root' })
export class CertificationsService {
    private readonly certifications: Certification[] = [
        {
            name: 'IBM Certified Developer - App Connect Enterprise v12.0',
            issuer: 'IBM',
            badge: 'ibm-certified-developer-app-connect-enterprise-v12.png',
            link: 'https://www.credly.com/badges/dcae0ba3-21cc-4812-a938-2c58ef533276/public_url'
        },
        {
            name: 'IBM Certified Solution Implementer - API Connect v10.0.3',
            issuer: 'IBM',
            badge: 'ibm-certified-solution-implementer-api-connect-v10-0-3.png',
            link: 'https://www.credly.com/badges/587e16de-c219-4677-9310-65ea3aad54ff/public_url'
        },
        {
            name: 'Cloud Digital Leader',
            issuer: 'Google Cloud',
            badge: 'cloud-digital-leader-certification.png',
            link: 'https://www.credly.com/badges/351131b7-8f05-4f47-872b-d5451c18ae20/public_url'
        },
        {
            name: 'Professional Cloud Architect Certification',
            issuer: 'Google Cloud',
            badge: 'professional-cloud-architect-certification.png',
            link: 'https://www.credly.com/badges/0a09e472-2e7f-41b2-8535-05ccb0f76244/public_url'
        }
    ];

    getAll(): Certification[] {
        return this.certifications;
    }

    getFeatured(max: number = 4): Certification[] {
        return this.certifications.slice(0, max);
    }
}


