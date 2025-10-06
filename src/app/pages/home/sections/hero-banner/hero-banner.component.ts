import { Component } from '@angular/core';
import { Certification } from '../../../../models/certification.model';
import { CertificationsService } from '../../../../shared/services/certifications.service';

@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
    featuredCertifications: Certification[] = [];

    constructor(private readonly certificationsService: CertificationsService) {
        this.featuredCertifications = this.certificationsService.getFeatured(4);
    }
    ngAfterViewInit(): void {
        function counter(id: string, start: number, end: number, duration: number): void {
            let obj: any = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, step);
        }

        counter('projectCompleted', 0, 7, 2000);
    }
}
