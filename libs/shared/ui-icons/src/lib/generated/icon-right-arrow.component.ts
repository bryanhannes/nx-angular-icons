import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon[icon-right-arrow]',
  standalone: true,
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
    <path
      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499z"
      data-name="Right"
      style="fill:#232326"
    />
  </svg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../icon.component.scss'],
})
export class IconRightArrowIconComponent {}
