import { Component, inject, computed } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styles: [`
    .banner-gradient {
      background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-500) 50%, var(--color-secondary-support-600) 100%);
      background-size: 200% 200%;
      animation: gradientShift 8s ease infinite;
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `],
})
export class WelcomeBannerComponent {
  readonly ls = inject(LanguageService);

  readonly gregorianDate = computed(() => {
    const now = new Date();
    const locale = this.ls.lang() === 'ar' ? 'ar-AE' : 'en-AE';
    return now.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  });

  readonly hijriDate = computed(() => {
    const now = new Date();
    const locale = this.ls.lang() === 'ar' ? 'ar-SA-u-ca-islamic' : 'en-SA-u-ca-islamic';
    return now.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  });
}
