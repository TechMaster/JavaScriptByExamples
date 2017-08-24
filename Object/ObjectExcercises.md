1. Viết function in ra tất cả properties key và value,nếu properties là một method thì chạy nó và in kết quả cùng với key. ví dụ:
```js
tomCat = {
    name: 'Tom',
    spacies: 'Rusian Blue Cat',
    intro() {
        return `${this.name} is a ${this.spacies}`
    }
}

listProps(tomCat)
// in ra 
/*
'name' : 'Tom'
'spacies' : 'Rusian Blue Cat'
'intro' : 'Tom is a Russian Blue Cat'
*/
```

2. Viết prototype method cho Object xóa một property của 1 object, in ra object sau khi đã xóa prop
```js
tomCat = {
    name: 'Tom',
    spacies: 'Rusian Blue Cat',
    intro() {
        return `${this.name} is a ${this.spacies}`
    }
}

Object.delProp(tomCat,name)
// trả về 
tomCat = {
    spacies: 'Rusian Blue Cat',
    intro() {
        return `${this.name} is a ${this.spacies}`
    }
}
```
3. Viết function tính length của obj (có bao nhiêu thuộc tính và phương thức)
```js
lengthOf(tomCat) // in ra 3
```

4. Cho một json object, với nội dung là các đối tượng sách có tiêu đề, tác giả và trạng thái, những đối tượng nào có trạng thái true thì in ra:
```js
let books = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

trueStatus(books)
// in ra 
/* [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }
]; */
```

5. cho json sau là danh sách các điện thoại, nhà sản xuất và giá của chúng, viết function có tham số là nsx và % trả về một json là danh sách các điện thoại của nsx và giá mới = % giá cũ (json cũ không bị tham chiếu dẫn tới thay đổi). ví dụ:
```js
let jsonDataOfSmartPhone = [
    { sp:'Iphone 6', nsx:'Apple', price: '800' },
    { sp:'Iphone 7', nsx:'Apple', price: '900' },
    { sp:'Iphone 8', nsx:'Apple', price: '1000' },
    { sp:'Galaxy 6', nsx:'Samsung', price: '500'},
    { sp:'Galaxy 7', nsx:'Samsung', price: '550'},
    { sp:'Galaxy 8', nsx:'Samsung', price: '650'}
]

saleOff('Samsung',50) //giảm giá 50% cho các sp của samsung
// in ra 
/*
[
    { sp:'Galaxy 6', nsx:'Samsung', price: '250'},
    { sp:'Galaxy 7', nsx:'Samsung', price: '275'},
    { sp:'Galaxy 8', nsx:'Samsung', price: '325'}
]
console.log(jsonDataOfSmartPhone) // giá ko đổi.
*/
```