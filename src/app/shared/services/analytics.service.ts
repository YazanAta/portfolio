import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    constructor(private firestore: Firestore) { }

    async trackVisit(): Promise<void> {
        try {
            const visitData = {
                timestamp: new Date(),
                url: window.location.href,
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'direct'
            };

            await addDoc(collection(this.firestore, 'visits'), visitData);
            console.log('Visit tracked:', visitData);
        } catch (error) {
            console.error('Error tracking visit:', error);
        }
    }
}

