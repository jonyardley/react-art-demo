import {EventEmitter} from "events";

const Ticker = new EventEmitter();

Ticker.frame = 0;

function tick() {
  setTimeout(function() {
    requestAnimationFrame(tick);
    Ticker.frame++;
    Ticker.emit("tick");
  }, 1000 / 60);
}

tick();

export default Ticker;
