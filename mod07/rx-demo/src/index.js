// import rxjs from 'rxjs';

// rxjs.Observable.interval(1000)
//     .subscribe(e => console.log(e))

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
// import 'rxjs/add/operator/flatmap'
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/take";
import "rxjs/add/operator/do";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/operator/pairwise";
import "rxjs/add/operator/catch";

function getSlowData(e) {
  return new Promise(resolve => {
      console.log("before", e);
    setTimeout(() => {
      console.log("after", e);
      resolve(e);
    }, 2000);
  });
}

// Observable.interval(1000)
//   .do(e => console.log("do", e))
//   // .map(e => new Date())
//   //   .filter(e => e % 2 === 0)
//   // .switchMap(e => fetch('/api/' + e))
//   .switchMap(e => getSlowData(e))
//   // .subscribe();
// //   .take(3)
//   .subscribe(
//     e => console.log('subscribe', e),
//     err => console.error(err),
//     () => console.log("Complete")
//   );



// getSlowData(1).then(x => console.log(x))


Observable.fromEvent(document.getElementById('target'), 'mousemove')
    .do(() => {throw new Error()})
    .map(e => ({x: e.screenX, y: e.screenY}))
    .throttleTime(1000)
    .pairwise()
    .catch(err => Observable.interval(1000))
    .do(e => console.log("do", e))
    .subscribe(
    e => console.log('subscribe', e),
    err => console.warn(err),
    () => console.log("Complete")
  );

  