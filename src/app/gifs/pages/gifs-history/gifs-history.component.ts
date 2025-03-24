import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'gifs-history',
  imports: [ListComponent],
  templateUrl: './gifs-history.component.html',
})
export default class GifsHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query())
  })
  /*query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log(params['query']);
  })*/
}
