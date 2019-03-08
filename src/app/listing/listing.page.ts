import { Component, OnInit, Injector } from '@angular/core';

import { PreLoad } from '../utils/pre-load.decorator';
import { IPreloadingComponent } from '../utils/preloading-component.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
@PreLoad('ProductDetails')
export class ListingPage implements OnInit, IPreloadingComponent {

  constructor(public injector: Injector) { }

  ngOnInit() { }
}
