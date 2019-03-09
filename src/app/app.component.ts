import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Eagerly Loaded',
      url: '/eagerly-loaded',
      icon: 'list'
    },
    {
      title: 'Lazy Loaded',
      url: '/lazy-loaded',
      icon: 'list'
    },
    {
      title: 'Pre Loaded',
      url: '/pre-loaded',
      icon: 'list'
    },
    {
      title: 'Pre Loaded (with delay)',
      url: '/pre-loaded-with-delay',
      icon: 'list'
    },
    {
      title: 'Listing',
      url: '/listing',
      icon: 'list'
    },
    {
      title: 'Can Activate',
      url: '/can-activate',
      icon: 'list'
    },
    {
      title: 'Can Deactivate',
      url: '/can-deactivate',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
