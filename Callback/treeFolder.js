const fs = require('fs')
const path = require('path')

let sourcePath = '/home/superquan/Dropbox/Tuts'
let tem = '   ';
const tree = (sourcePath) => {
    fs.readdir(sourcePath, (err, list) => {
        if (err) throw new Error('No such Folder !')
        // console.log(list);
        list.forEach((file, i) => {
            let filePath = sourcePath + '/' + file
            fs.stat(filePath, (err, stat) => {
                if (err) throw new Error('Not such file or folder !')

                if (stat.isDirectory()) {
                    if (i === list.length - 1) {
                        tem += '    ';
                    } else {
                        tem += '|   ';
                    }

                    tree(filePath)
                    tem = tem.substr(0, tem.length - 4)
                }

            })
            if (i === list.length - 1) {
                fs.stat(filePath, (err, stat) => {
                    if (err) throw new Error('Not file,folder for stats !')
                    if (stat.isDirectory()) {
                        console.log(tem + '└── ' + file);
                    }
                })
            } else {
                fs.stat(filePath, (err, stat) => {
                    if (err) throw new Error('Not file,folder for stats !')
                    if (stat.isDirectory()) {
                        console.log(tem + '├── ' + file);
                    }
                })
            }

        })
    })
}

try {
    tree(sourcePath)

} catch (err) {
    console.log(err + '');
}