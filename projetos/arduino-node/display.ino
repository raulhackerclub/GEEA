
int i, y, x;

int leds[8] = {13, 12, 11, 10, 9, 8, 7, 6};

char nums[10][8] = {
//  0      1     2    3      4    5     6      7
  {HIGH, HIGH, HIGH,  LOW,  LOW, HIGH, HIGH, HIGH}, // 0
  { LOW,  LOW, HIGH,  LOW,  LOW,  LOW,  LOW, HIGH}, // 1
  {HIGH, HIGH,  LOW,  LOW, HIGH,  LOW, HIGH, HIGH}, // 2
  { LOW, HIGH, HIGH,  LOW, HIGH,  LOW, HIGH, HIGH}, // 3
  { LOW,  LOW, HIGH,  LOW, HIGH, HIGH,  LOW, HIGH}, // 4
  { LOW, HIGH, HIGH,  LOW, HIGH, HIGH, HIGH,  LOW}, // 5
  {HIGH, HIGH, HIGH,  LOW, HIGH, HIGH, HIGH,  LOW}, // 6
  { LOW,  LOW, HIGH,  LOW,  LOW,  LOW, HIGH, HIGH}, // 7
  {HIGH, HIGH, HIGH,  LOW, HIGH, HIGH, HIGH, HIGH}, // 8
  { LOW,  LOW, HIGH,  LOW, HIGH, HIGH, HIGH, HIGH}  // 9
};

void setup() {
  for (i = 0; i < 8; i++) {
    pinMode(leds[i], OUTPUT);
  }  
}

void loop() {
  for (y = 0; y < 10; y++) {
    for (x = 0; x < 8; x++) {
      digitalWrite(leds[x], nums[y][x]);
    }
    delay(1000);
  }
}
