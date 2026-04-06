import { Component, inject, computed } from '@angular/core';
import { LanguageService, TranslationKey } from '../../services/language.service';

interface ActivityItem {
  key: TranslationKey;
  status: 'statusActive' | 'statusPending' | 'statusActionRequired';
  badgeClass: string;
  dotColor: string;
  date: Date;
}

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
})
export class ActivityFeedComponent {
  readonly ls = inject(LanguageService);

  readonly activities: ActivityItem[] = [
    {
      key: 'activityVisaApproved',
      status: 'statusActive',
      badgeClass: 'badge-success',
      dotColor: 'bg-aegreen-500',
      date: new Date(Date.now() - 2 * 3600000),
    },
    {
      key: 'activityIdRenewal',
      status: 'statusPending',
      badgeClass: 'badge-warning',
      dotColor: 'bg-camel-500',
      date: new Date(Date.now() - 5 * 3600000),
    },
    {
      key: 'activityAppointment',
      status: 'statusActive',
      badgeClass: 'badge-success',
      dotColor: 'bg-aegreen-500',
      date: new Date(Date.now() - 24 * 3600000),
    },
    {
      key: 'activityFineCleared',
      status: 'statusActive',
      badgeClass: 'badge-success',
      dotColor: 'bg-aegreen-500',
      date: new Date(Date.now() - 2 * 24 * 3600000),
    },
    {
      key: 'activityDocUploaded',
      status: 'statusActionRequired',
      badgeClass: 'badge-error',
      dotColor: 'bg-aered-500',
      date: new Date(Date.now() - 3 * 24 * 3600000),
    },
  ];

  relativeTime(date: Date): string {
    return this.ls.relativeTime(date);
  }
}
