import { Component, inject } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { LanguageService } from '../../services/language.service';

interface StatCard {
  key: 'activeServices' | 'pendingRequests' | 'upcomingAppointments' | 'newNotifications';
  value: number;
  icon: string;
  badgeClass: string;
  iconBg: string;
}

@Component({
  selector: 'app-stats-row',
  templateUrl: './stats-row.component.html',
  animations: [
    trigger('staggerIn', [
      transition(':enter', [
        query('.stat-card', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class StatsRowComponent {
  readonly ls = inject(LanguageService);

  readonly stats: StatCard[] = [
    { key: 'activeServices', value: 12, icon: 'grid', badgeClass: 'badge-success', iconBg: 'bg-aegreen-100 text-aegreen-700' },
    { key: 'pendingRequests', value: 3, icon: 'clock', badgeClass: 'badge-warning', iconBg: 'bg-camel-100 text-camel-700' },
    { key: 'upcomingAppointments', value: 2, icon: 'calendar', badgeClass: 'badge-info', iconBg: 'bg-seablue-100 text-seablue-700' },
    { key: 'newNotifications', value: 8, icon: 'bell', badgeClass: 'badge-error', iconBg: 'bg-aered-100 text-aered-700' },
  ];
}
