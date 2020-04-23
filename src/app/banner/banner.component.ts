import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';


//import { URL_API } from '../app.api'

@Component({
  selector: 'app-banner', 
  templateUrl: './banner.component.html'})
  //styleUrls: ['./banner.component.css']})
  
export class BannerComponent {
  faPauseCircle = faPauseCircle;
  images = [1011, 1083, 1006, 1035, 1050, 1047, 13, 154].map((n) => `https://picsum.photos/id/${n}/1420/350`);

  //https://my-json-server.typicode.com/ludmylasoares/json-server/banner?id=${n}

  paused = false;
  unpauseOnArrow = true;
  pauseOnIndicator = true;
  pauseOnHover = true;
  
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}