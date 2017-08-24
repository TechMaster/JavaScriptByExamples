function log(x) {
  (function () {
    console.log('this is function inside function');
    console.log(x)
  })(x)
}
log(54) //in ra 'this is function inside function' và 54
