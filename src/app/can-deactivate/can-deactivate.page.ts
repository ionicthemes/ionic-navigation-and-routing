import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IDeactivatableComponent } from '../utils/deactivatable-component.interface';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.page.html',
  styleUrls: ['./can-deactivate.page.scss'],
})
export class CanDeactivatePage implements OnInit, IDeactivatableComponent {

  constructor() { }

  ngOnInit() { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // For simplicity we use a flag. You should implement the logic to figure out if there are any unsaved changes or not
    const areUnsavedChanges = true;

    let canDeactivate = true;

    if (areUnsavedChanges) {
      canDeactivate = window.confirm('Are you sure you want to leave this page?');
    }

    return canDeactivate;
  }
}
