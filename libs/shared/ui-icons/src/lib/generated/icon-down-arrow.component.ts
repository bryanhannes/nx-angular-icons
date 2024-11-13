import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon[icon-down-arrow]',
  standalone: true,
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
    <path
      d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5z"
      style="fill:#232326"
    />
  </svg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDownArrowIconComponent {}
