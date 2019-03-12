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
      url: '/home'
    }
  ];

  public moduleLoadingPages = [
    {
      title: 'Eagerly Loaded',
      url: '/eagerly-loaded'
    },
    {
      title: 'Lazy Loaded',
      url: '/lazy-loaded'
    },
    {
      title: 'Pre Loaded',
      url: '/pre-loaded'
    },
    {
      title: 'Pre Loaded (with delay)',
      url: '/pre-loaded-with-delay'
    },
    {
      title: 'Listing',
      url: '/listing'
    }
  ];

  public routeGuardsPages = [
    {
      title: 'Can Activate',
      url: '/can-activate'
    },
    {
      title: 'Can Deactivate',
      url: '/can-deactivate'
    },
    {
      title: 'Can Load',
      url: '/can-load'
    }
  ];

  public routeResolversPages = [
    {
      title: 'Blocking Resolver',
      url: '/blocking-resolver'
    },
    {
      title: 'Non Blocking Resolver',
      url: '/non-blocking-resolver'
    },
    {
      title: 'Progressive Shell Resolver',
      url: '/progressive-shell-resolver'
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
