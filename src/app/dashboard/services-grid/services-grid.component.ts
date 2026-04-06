import { Component, inject } from '@angular/core';
import { LanguageService, TranslationKey } from '../../services/language.service';

interface ServiceCard {
  key: TranslationKey;
  icon: string;
  status: 'statusActive' | 'statusPending' | 'statusActionRequired';
  badgeClass: string;
}

@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.component.html',
})
export class ServicesGridComponent {
  readonly ls = inject(LanguageService);

  readonly services: ServiceCard[] = [
    { key: 'visaRenewal', icon: 'passport', status: 'statusActive', badgeClass: 'badge-success' },
    { key: 'emiratesId', icon: 'id', status: 'statusPending', badgeClass: 'badge-warning' },
    { key: 'businessLicense', icon: 'briefcase', status: 'statusActionRequired', badgeClass: 'badge-error' },
    { key: 'healthInsurance', icon: 'heart', status: 'statusActive', badgeClass: 'badge-success' },
    { key: 'educationPortal', icon: 'book', status: 'statusActive', badgeClass: 'badge-success' },
    { key: 'trafficFines', icon: 'car', status: 'statusPending', badgeClass: 'badge-warning' },
  ];
}
