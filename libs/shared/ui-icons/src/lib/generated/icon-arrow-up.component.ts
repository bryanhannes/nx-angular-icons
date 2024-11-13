import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon[icon-arrow-up]',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="1-Arrow Up"
    viewBox="0 0 32 32"
  >
    <path
      d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29Z"
    />
  </svg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowUpIconComponent {}
