// function MyClock() {
//   this.cur_date = new Date();
//   this.hours = this.cur_date.getHours();
//   this.minutes = this.cur_date.getMinutes();
//   this.seconds = this.cur_date.getSeconds();
//   this.dayInWeek = this.cur_date.getDay();
//   this.dayInMonth = this.cur_date.getDate();
//   this.month = this.cur_date.getMonth();
//   this.year = this.cur_date.getFullYear();
// }
// MyClock.prototype.run = function () {
//   setInterval(this.update.bind(this), 1000);
// };
// MyClock.prototype.update = function () {
//   this.updateTime(1);
//   console.log(`Thứ ${this.dayInWeek} Ngày ${this.dayInMonth} Tháng ${this.month + 1} Năm ${this.year}, ${this.hours}:${this.minutes}:${this.seconds}`);
// };
// MyClock.prototype.updateTime = function (secs) {
//   this.seconds += secs;
//   if (this.seconds >= 60) {
//     this.minutes++;
//     this.seconds = 0;
//   }
//   if (this.minutes >= 60) {
//     this.hours++;
//     this.minutes = 0;
//   }
//   if (this.hours >= 24) {
//     this.hours = 0;
//   }
// };
// var clock = new MyClock();
// clock.run();
// console.log(__dirname);
const fs = require('fs')
const path = require('path')

let srcPath = '/home/superquan/Dropbox';
let tem = '   ';

function getDirectories(srcpath) {

  let fileList = fs.readdirSync(srcpath);

  fileList.forEach(function (fileItem, i) {
    name = srcpath + '/' + fileItem;
    if (i === fileList.length - 1) {
      if (fs.statSync(name).isDirectory()) {
        console.log(tem + '└── ' + fileItem.blue);
      } else {
        console.log(tem + '└── ' + fileItem);
      }

    } else {
      if (fs.statSync(name).isDirectory()) {
        console.log(tem + '├── ' + fileItem.blue);
      } else {
        console.log(tem + '├── ' + fileItem);
      }
    }
    if (fs.statSync(name).isDirectory()) {
      if (i === fileList.length - 1) {
        tem += '    ';
      } else {
        tem += '|   ';
      }
      getDirectories(name);
      tem = tem.substr(0, tem.length - 4);
    }
  });
};

getDirectories(srcPath);