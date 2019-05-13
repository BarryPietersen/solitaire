import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Suits, Ranks } from './app/types/card';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

window.onload = function () {
  preloadImages();
}

function preloadImages() {
  let rank: string;
  let img: HTMLImageElement;
  let path = './assets/images/JPEG/';
  let preloaded = document.createElement('div');
  preloaded.id = 'preloaded';
  preloaded.hidden = true;

  for(let s = 0; s < 4; s++) {
    for(let r = 0; r < 13; r++) {
      rank = r === 0 || r > 9 ? Ranks[r][0] : (r + 1).toString();
      img = new Image();
      img.src = `${path}${rank}${Suits[s][0]}.jpg`;
      preloaded.append(img);
    }
  }

  document.getElementsByTagName('body')[0].append(preloaded);
}
