import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from './db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-farm-details',
  template: `
    <p>
      <b>Farm: </b>{{farmDetails.farm}}
    </p>
    <p>
    <b>Produce:</b> {{farmDetails.produce}}
  </p>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit, OnDestroy {

  private farmDetails;
  private subscriprion: Subscription;
  constructor(private r: ActivatedRoute, private db: DbService) {
    this.subscriprion = r.params.subscribe(parms => {
      const id = parseInt(parms['id']);
      const data = db.getDate();
      for (const e of data) {
        if (e._id == id) {
          this.farmDetails = e;
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriprion.unsubscribe();
  }

}
