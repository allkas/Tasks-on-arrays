// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
// const array = () => {
//   const arr = [];
//   for (let i = 0; i < 10; i += 1) {
//     arr.push(0);
//   }
//   arr[0] = 1;
//   arr[arr.length - 1] = 1;
//   console.log(arr);
// };
// array();

// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
// const arrays = () => {
//   const arr = [];
//   for (let i = 0; i < 5; i += 1) {
//     arr.push(0, 1);
//   }
//   console.log(arr);
// };
// arrays();

// Заполнить массив последовательными нечетными числами, начиная с единицы.
// const arrays = () => {
//   const arr = [];
//   for (let i = 1; i <= 11; i += 2) {
//     arr.push(i);
//   }
//   console.log(arr);
// };
// arrays();

// Сформировать массив из элементов арифметической прогрессии с заданным первым элементом  x и разностью d.
// const arrays = (num, d) => {
//   const arr = [];
//   for (let i = num; i < 50; i += d) {
//     arr.push(i);
//   }
//   console.log(arr);
// };
// arrays(3, 4);

//  Сформировать возрастающий массив из четных чисел.
// const array = [];
// for (let i = 0; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     array.push(i);
//   }
// };
// console.log(array);

// Сформировать убывающий массив из чисел, которые делятся на 3.
// const array = [];
// for (let i = 15; i > 0; i -= 1) {
//   if (i % 3 === 0) {
//     array.push(i);
//   }
// };
// console.log(array);

// Создать массив из n первых чисел Фибоначчи.
// const fib = (n) => {
//   let a = 1;
//   let b = 1;
//   const array = [a, b];
//   for (let i = 3; i <= n; i += 1) {
//     let c = a + b;
//     a = b
//     b = c
//     array.push(c)
//   }
//   console.log(array)
// };
// fib(10);

// Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.
// НЕ РЕШИЛ
// const isPrime = (num) => {
//   const array = [];
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num / 2; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//     return true;
//   }
//   console.log(array);
// };
// isPrime(150);

// Создать массив, каждый элемент которого равен квадрату своего номера.
// const array = [];
// for (let i = 0; i < 10; i += 1) {
//   array.push(Math.pow(i, 2))
// };
// console.log(array);

// Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от деления своего номера на 5.
// const array = [];
// for (let i = 0; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     array.push(1);
//   }
//   if (i % 2 !== 0) {
//     array.push(i % 5);
//   }
// };
// console.log(array);

// Создать массив, который одинаково читается как слева направо, так и справа налево.
// const array = ['a', 'b', 'c'];
// for (let i = array.length - 1; i >= 0; i -= 1) {
//   array.push(array[i]);
// }
// console.log(array)

// Заполните массив случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
// const array = [];
// const random = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
// for (let i = 0; i <= 10; i += 1) {
//   let index0 = 0;
//   let index1 = 0;
//   array.push(random(0, 1))
//   for (let j = 0; j <= 10; j += 1) {
//     if (array[j] === 1) {
//       index1 += 1;
//     } else {
//       index0 += 1;
//     }
//   }
//   console.log(index1)
//   console.log(index0)
//   // if (index1 > index0) console.log(array);
//   // if (index0 > index1) array.push(1)
// }
// console.log(array)

// Сформировать массив из случайных целых чисел от 0 до 9 , в котором единиц от 3 до 5 и двоек больше троек.

// Создайте массив, в котором количество отрицательных чисел равно количеству положительных и положительные числа расположены на случайных местах в массиве.
// const random = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

// const array = [];
// const arrayLength = 5
// for (let i = 0; i < arrayLength; i += 1) {
//   array.push(random(1, 10));
// }
// for (let j = 0; j < arrayLength; j += 1) {
//   array.push(random(1, 10));
// }
//   array.sort(() => Math.random() - 0.5)
// console.log(array);

// Заполните массив случайным образом нулями, единицами и двойками так, чтобы первая двойка в массиве встречалась раньше первой единицы, количество единиц было в точности равно суммарному количеству нулей и двоек.


// Придумайте правило генерации массива заданной длины. Определите, сгенерирован ли данный массив вашим правилом или нет.

// Анализ элементов массива

// Определить, содержит ли массив данное число x
// const array = [-4, -2, -7, 2, -1, 8, -3, 5, 9, 8];
// const arrayNumber = (arr, num) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };
// arrayNumber(array, 8);

// Найти количество четных чисел в массиве.
// const array = [ 7, 8, 4, 1, 8, 4, 5, 9, 6, 4 ];
// const isEven = (arr) => {
//   let index = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       index += 1;
//     }
//   }
//   console.log(index);
// };
// isEven(array)

// Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.
// const array = [ 7, 8, 4, 1, 8, 4, 5, 9, 6, 4, 21 ];

// const arrNum = (arr) => {
//   let index = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 3 === 0 && arr[i] % 7 !== 0) {
//       index += 1;
//     }
//   }
//   console.log(index)
// };
// arrNum(array);

// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива.
// const array = [ 7, 8, 4, 1, 8, 4, 5, 9, 6, 4 ];
// const whatMore = (arr) => {
//   let firstIndexArray = 0;
//   let lastIndexArray = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % arr[0] === 0) {
//       firstIndexArray += 1;
//     } else if (arr[i] % arr[arr.length - 1] === 0) {
//       lastIndexArray += 1;
//     }
//   }
//   if (firstIndexArray >= lastIndexArray) return true;
//   return false;
// };
// whatMore(array);

// Найдите сумму и произведение элементов массива.
// const array = [ 7, 8, 4, 1, 8, 4, 5, 9, 6, 4 ];
// const amountWorks = (arr) => {
//   let amount = 0;
//   let works = 1;
//   for (let i = 0; i < arr.length; i += 1) {
//     amount += arr[i];
//     works *= arr[i];
//   }
//   console.log(amount);
//   console.log(works);
// };
// amountWorks(array);

// Найдите сумму четных чисел массива.
// const array = [ 7, 8, 4, 1, 8, 4, 5, 9, 6, 4 ];
// const sumOfEvenNumbers = (arr) => {
//   let evenNumbers = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers += arr[i];
//     }
//   }
//   return evenNumbers;
// };
// sumOfEvenNumbers(array);

// Найдите сумму нечетных чисел массива, которые не превосходят 11.
// const array = [12, 11, 4, 22, 15, 17, 13, 5, 8, 10, 3, 7, 9];
// const sumOfOddNumbers = (arr) => {
//   let oddNumbers = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] <= 11 && arr[i] % 2 !== 0) {
//       oddNumbers += arr[i];
//     }
//   }
//   return oddNumbers;
// };
// sumOfOddNumbers(array);

// Найдите сумму чисел массива, которые расположены до первого четного числа массива. Если четных чисел в массиве нет, то найти сумму всех чисел за исключением крайних.
// const array = [15, 17, 13, 5, 8, 10, 3, 7, 9];
// const array1 = [2, 4, 6, 8]
// const sumNumbers = (arr) => {
//   let numbersOdd = 0;
//   let numbersEven = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) break;
//     numbersOdd += arr[i];
//     console.log(numbersOdd);
//   }
//   if (numbersOdd === 0) {
//     for( let i = 1; i < arr.length - 1; i += 1) {
//       numbersEven += arr[i];
//     }
//   console.log(numbersEven)
//   }
// };
// sumNumbers(array);

// Найдите сумму чисел массива, которые стоят на четных местах.
// const array = [15, 17, 13, 5, 8, 10, 3, 7, 9];
// let sumEvenArray = 0;
// for (let i = 0; i < array.length; i += 2) {
//   sumEvenArray += array[i];
// }
// console.log(sumEvenArray);

// Найдите сумму чисел массива, которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива.
// const array = [10, 17, 13, 20, 8, 11, 3, 7, 9];
// const sumOdd = (arr) => {
//   let sumOddArray = 0;
//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] > arr[0] && arr[i] > arr[arr.length - 1]) {
//       sumOddArray += arr[i];
//     }
//   }
//   return sumOddArray
// };
// sumOdd(array);

// Найти наибольший элемент массива.
// const array = [10, 17, 21, 20, 8, 11, 3, 7, 9];
// const greatestElement = (arr) => {
//   let element = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > element) {
//       element = arr[i];
//     }
//   }
//   return element;
// };
// greatestElement(array);

// Найдите сумму наибольшего и наименьшего элементов массива.
// const array = [10, 17, 21, 20, 8, 11, 3, 7, 9];
// const sumArr = (arr) => {
//   let greatest = 0;
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > greatest) {
//       greatest = arr[i];
//     }
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   console.log(greatest)
//   console.log(smallest)
//   return greatest + smallest;
// };
// sumArr(array);

// Найдите количество элементов массива, которые отличны от наибольшего элемента не более чем на 10%.
// const array = [10, 17, 21, 20, 19, 8, 11, 3, 7, 9];
// const findNumberPercentages = (arr) => {
//   let greatest = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > greatest) {
//       greatest = arr[i];
//     }
//     let difference = greatest * 0.1;
//     console.log(difference)
//     if (greatest - arr[i] <= difference) {
//       result += 1;
//     }
//   }
//   return result;
// };
// findNumberPercentages(array);

// Найдите наименьший четный элемент массива.
// const array = [11, 8, 6, 21, 19, 8, 11, 3, 7, 9];
// const smallestElement = (arr) => {
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < smallest && arr[i] % 2 === 0) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// };
// smallestElement(array);

// Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3.
// const array = [12, 9, 6, 21, 19, 8, 12, 3, 7, 9];
// const element = (arr) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] % 3 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   let result = 0;
//   for (let i = 0; i < newArray.length; i += 1) {
//     if (newArray[i] > result) {
//       result = newArray[i];
//     }
//   }
//   console.log(result);
// };
// element(array);

// Дан массив и число p. Найдите два различных числа в массиве, сумма которых наиболее близка к p.

// Дан массив. Найдите два соседних элемента, сумма которых минимальна.
// const array = [12, 9, 6, 21, 19, 8, 12, 3, 7, 2];
// const sumTwoAdjacent = (arr) => {
//   let smallest = arr[0] + arr[1];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] + arr[i + 1] < smallest) {
//       smallest = arr[i] + arr[i + 1]
//     }
//   }
//   return smallest;
// };
// sumTwoAdjacent(array);

// Дан массив. Найдите три последовательных элемента в массиве, сумма которых максимальна.
// const array = [12, 9, 6, 21, 19, 8, 12, 32, 34, 22];
// const sumThreeAdjacen = (arr) => {
//   let smallest = arr[0] + arr[1] + arr[2];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] + arr[i + 1] + arr[i + 2] > smallest) {
//       smallest = arr[i] + arr[i + 1] + arr[i + 2];
//     }
//   }
//   return smallest;
// };
// sumThreeAdjacen(array)

// В данном массиве найдите количество чисел, соседи у которых отличаются более чем в 2 раза.
// Найдите количество чисел, каждое из которых равно сумме квадратов своих соседей и при этом не является наибольшим в массиве.
// Проверьте, содержит ли данный массив из n чисел, все числа от 1 до n.
// Проверьте, образует ли элементы массива в данном порядке арифметическую или геометрическую прогрессии.
// Проверьте, является ли данный массив возрастающим или убывающим.
// Найдите количество различных элементов данного массива.
// Определите количество перемен знаков элементов массива.
// В данном массиве найти максимальное количество одинаковых элементов.
// Найти наиболее часто встречающийся элемент в массиве целых чисел.
// В одномерном массиве, состоящем из n вещественных элементов, вычислите номер минимального элемента массива и сумму элементов массива, расположенных между первым и вторым отрицательными элементами.
// Напишите программу, которая вводит с клавиатуры непустой массив целых чисел, и выводит число локальных максимумов (элемент является локальным максимумом, если он не имеет соседей, больших, чем он сам).
// В данном массиве найдите два наименьших элемента.
// Определите, есть ли в массиве повторяющиеся элементы.
// В данном массиве найдите наибольшую серию подряд идущих элементов, расположенных по возрастанию.
// В массиве найдите количество серий из четверок подряд идущих попарно различных элементов.
// Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.

// В массиве заменить все числа, большие данного числа, на среднее арифметическое всех чисел массива.
// const array = [17, 4, 3, 4, 5, 6, 7, 8, 9];
// const newArr = (arr, num) => {
//   let arithmeticMean = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     arithmeticMean += arr[i];
//   }
//   arithmeticMean /= arr.length;
//   console.log(arithmeticMean)
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > num) {
//       arr[i] = arithmeticMean;
//     }
//   }
//   return arr;
// };
// newArr(array, 5);

// Дан массив. Заменить все числа, меньшие последнего элемента массива, на первый элемент.
// const array = [3, 4, 3, 4, 5, 6, 7, 8, 5];
// const newArr = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < arr[arr.length - 1]) {
//       arr[i] = arr[0];
//     }
//   }
//   return arr;
// };
// newArr(array);
