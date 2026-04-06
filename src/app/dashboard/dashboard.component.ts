import { Component } from '@angular/core';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { StatsRowComponent } from './stats-row/stats-row.component';
import { ServicesGridComponent } from './services-grid/services-grid.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';

@Component({
  selector: 'app-dashboard',
  imports: [WelcomeBannerComponent, StatsRowComponent, ServicesGridComponent, ActivityFeedComponent],
  template: `
    <app-welcome-banner />
    <app-stats-row />
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div class="xl:col-span-2">
        <app-services-grid />
      </div>
      <div class="xl:col-span-1">
        <app-activity-feed />
      </div>
    </div>
  `,
})
export class DashboardComponent {}
