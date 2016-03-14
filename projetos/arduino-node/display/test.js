var five = require("johnny-five");
var board = new five.Board();
const HIGH = true;
const LOW = false;
var leds;
var nums = [
//  0      1     2    3      4    5     6      7
  [HIGH, HIGH, HIGH,  LOW,  LOW, HIGH, HIGH, HIGH], // 0
  [ LOW,  LOW, HIGH,  LOW,  LOW,  LOW,  LOW, HIGH], // 1
  [HIGH, HIGH,  LOW,  LOW, HIGH,  LOW, HIGH, HIGH], // 2
  [ HIGH, LOW, HIGH,  LOW, HIGH,  LOW, HIGH, HIGH], // 3
  [ LOW,  LOW, HIGH,  LOW, HIGH, HIGH,  LOW, HIGH], // 4
  [ HIGH, LOW, HIGH,  LOW, HIGH, HIGH, HIGH,  LOW], // 5
  [HIGH, HIGH, HIGH,  LOW, HIGH, HIGH, HIGH,  LOW], // 6
  [ LOW,  LOW, HIGH,  LOW,  LOW,  LOW, HIGH, HIGH], // 7
  [HIGH, HIGH, HIGH,  LOW, HIGH, HIGH, HIGH, HIGH], // 8
  [ LOW,  LOW, HIGH,  LOW, HIGH, HIGH, HIGH, HIGH]  // 9
];

board.on("ready", function() {
  // Create an Led on pin 13
  leds = [
      new five.Led(13),
      new five.Led(12),
      new five.Led(11),
      new five.Led(10),
      new five.Led(9),
      new five.Led(8),
      new five.Led(7),
      new five.Led(6),
  ];

  function displayNumero(numero) {
      for (var x = 0; x < 8; x++) {
        if (nums[numero][x]) {
            leds[x].on();
        } else {
            leds[x].off();
        }
      }
  }

  var y = 0;
  setInterval(function() {
    y = y < 10 ? y : 0;
    displayNumero(y);
    y++;
  }, 1000);
});
