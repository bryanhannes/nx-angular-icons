import {Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgComponentOutlet} from '@angular/common';
import {
  IconArrowUpIconComponent,
  IconDownArrowIconComponent, IconLeftArrowIconComponent,
  IconRightArrowIconComponent
} from '@nx-angular-icons/shared-ui-icons';

@Component({
  standalone: true,
  imports: [RouterModule, IconDownArrowIconComponent, IconArrowUpIconComponent, NgComponentOutlet, IconLeftArrowIconComponent, IconRightArrowIconComponent],
  selector: 'app-root',
  template: `
    <h1>Icons</h1>

    <div style="display: flex">
      <app-icon icon-arrow-up />
      <app-icon icon-down-arrow />
      <app-icon icon-left-arrow />
      <app-icon icon-right-arrow />
    </div>

    <h2>Dynamic icons</h2>

    <button (click)="updateDynamicIcon()">Update icon dynamically</button>

    <ng-container *ngComponentOutlet="dynamicIcon()" />
  `
})
export class AppComponent {

  protected readonly dynamicIcon = signal(IconArrowUpIconComponent);

  public updateDynamicIcon(): void {
    const icons = [IconDownArrowIconComponent, IconArrowUpIconComponent, IconLeftArrowIconComponent, IconRightArrowIconComponent];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    this.dynamicIcon.set(randomIcon);
  }
}
