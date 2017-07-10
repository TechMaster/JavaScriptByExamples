let i = 1;
do{
    let j = 1;
    do{
        console.log(i + ' x ' + j + ' = ' + i*j);
        j++;
    }
    while(j <= 10);
    i++;
    console.log('-----------');
}
while(i < 10);