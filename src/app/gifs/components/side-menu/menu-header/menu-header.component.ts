import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';
//import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'gifs-menu-header',
  imports: [],
  templateUrl: './menu-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent {
  envs = environment;
}
