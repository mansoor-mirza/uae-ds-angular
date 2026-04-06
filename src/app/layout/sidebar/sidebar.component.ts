import { Component, inject, signal, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('sidebarCollapse', [
      state('expanded', style({ width: '240px' })),
      state('collapsed', style({ width: '64px' })),
      transition('* <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  readonly ls = inject(LanguageService);
  readonly collapsed = signal(false);
  readonly collapsedChange = output<boolean>();

  toggle(): void {
    this.collapsed.update(v => !v);
    this.collapsedChange.emit(this.collapsed());
  }

  readonly navItems = [
    { key: 'home' as const, icon: 'home', route: '/dashboard' },
    { key: 'services' as const, icon: 'grid', route: '/dashboard' },
    { key: 'appointments' as const, icon: 'calendar', route: '/dashboard' },
    { key: 'notifications' as const, icon: 'bell', route: '/dashboard' },
  ];
}
