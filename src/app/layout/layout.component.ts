import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="flex min-h-screen bg-whitely-100">
      <app-sidebar />
      <div class="flex flex-col flex-1 min-w-0">
        <app-header />
        <main class="flex-1 p-6 overflow-y-auto">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {}
