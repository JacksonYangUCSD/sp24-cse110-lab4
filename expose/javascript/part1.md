# Part One
1. 20
2. 20
3. 20
4. This would throw an error because result is not in the same block as line 13, and therefore, would be not accessed. Causing the error.
5. This will throw an error because const can't be re-defined and will throw an error at line 7. 
6. This will throw an error because at line 7 and line 13 since like 5. you can't re-define a const and it can't be accessed outisde of it's block (i.e. {})

# Part Two
1. 3
2. 150
3. 150
4. [ 50, 100, 150 ]
5. There will be an error at line 12 because there is no such thing as a variable "i" since it was declared with a let, meaning it can't be accessed outside of the for loop.
6. There will be an error at line 13 because there is no such thing as a variable "discountedPrice" since it was declared with a let, meaning it can't be accessed outside of the for loop.
7. This will output 150 because the variable finalPrice is declared in the function discountPrices() and therefore, accessable all within the function, including within the for loop and therefore, can be accessed at line 13.
8. This will output [ 50, 100, 150 ] because the variable discounted is declared within the function discountPrices() and therefore, accessable within the whole function, including within the for loop and therefore, can be accessed at line 15 and returned. The output would return exactly half of every single number in the original array. (i.e. 100/2 = 50; 200/2 = 100; 300/2 = 150)
9. There will be an error at line 12 because there is no such thing as a variable "i" since it was delcared with a let, meaning it can't be accessed outside of the for loop.
10. 3, because it will count the thength of prices which is 3, and it can be accessed since it's still within the block (function).
11. This will output [ 50, 100, 150 ] because the variable discounted is declared within the function discountPrices() and therefore, accessable within the whole function, including within the for loop and therefore, can be accessed at line 15 and returned. The output would return exactly half of every single number in the original array. (i.e. 100/2 = 50; 200/2 = 100; 300/2 = 150)
