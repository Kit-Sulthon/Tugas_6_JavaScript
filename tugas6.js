function setup() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2) continue;
    console.log("Genap");
    console.log(i);
  }
}

setup();
