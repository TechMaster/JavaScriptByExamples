1. viết prototype method kiểm tra xem tham số đưa vào có nằm trong mảng không, trả về mảng chứa 2 phần tử [true or false, số phần tử giống tham số].

```js
arr = [
    1789, 2035, 1899, 1456, 2013,
    1458, 2458, 1254, 1472, 2365,
    1456, 2265, 1457, 2456
]
arr.hasThisNumber(1456)
// in ra [true,2] //có 2 số
arr.hasThisNumber(1)
// inra [false,0]
```

2. Viết prototype method kiểm tra và in kết quả xem mảng có bao nhiêu cặp 3 số có tổng bằng tham số đưa vào, kết quả dạng mảng đa chiều.
```js
arr = [1, -2, 0, 5, -1, -4]
arr.sumEqualTo(2) 
// in ra [[1, 5, -4],[-2, 5, -1]]
```

3. Cho một mảng với phần tử là các số bất kỳ, viết tất cả các mảng chứa dãy số liên tục (hơn 3 số liên tục) trong mảng đó,kết quả dạng mảng các dãy số:
```js
arr = [49, 1, 3, 200, 50, 2, 4, 48, 5]
consecutiveElement(arr)
//  [[48,49,50],[1,2,3,4,5]]
```

4. Viết method đưa ra kết quả là mảng 2 chiều chứa mảng các số chẵn và mảng các số lẻ:
```js
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evenAndOdd(arr)
//[[1,3,5,7,9],[2,4,6,8,10]]
```

5. Viết method kiểm tra và in ra số bị thiếu trong một mảng dãy số tự nhiên:

```js
arr = [1, 2, 3, 4, 7, 8, 9]
lackThis(arr)
// in ra [5,6]
```

6. Viết method có tham số là 2 mảng số, kết quả trả về  là một mảng chứa các phần tử bằng nhau:
```js
arr1 = [45, 98, 54, 34, 88, 45]
arr2 = [12, 65, 71, 34, 45, 98, 120, 720]
similarElement(arr1, arr2)
// in ra [45,98,34]
```

7. Cho mảng số, viết method in ra các phần tử bị lặp trong mảng đó, mảng ko có phần tử lặp in ra `false`
```js
arr = [1, 2, 5, 5, 6, 6, 7, 2]
arr2 = [1, 2, 3, 4, 5]
// in ra [2,5,6]
dupElement(arr)
// in ra false
```

8. Viết method in ra kết quả là mảng số bé nhất và lớn nhất của một mảng cho trước:
```js
arr = [45, 98, 54, 34, 88, 45]
minAndMax(arr)
// in ra [34,98]
```

9. Viết prototype method loại bỏ các phần tử "negative" trong một mảng. Kết quả là các phần tử còn lại.
```js
arr = [false, null, undefined, Infinity, 1, 2, 3]
arr.nonNegativeMatter()
// in ra [Infinity,1,2,3]
```

10. Cho một mảng với các phần tử số bất kỳ,viết function kiểm tra xem các phần tử = 10 có tổng bằng 30 hay không, in ra true/false
```js
arr = [10, 77, 10, 54, -11, 10]
checkSum(arr)
// in ra true
```