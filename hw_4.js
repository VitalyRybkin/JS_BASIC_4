console.log('1. Необходимо с помощью цикла for вывести следующие 11 строк в консоль:')

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
        continue;
    }
    if (i % 2 === 0) {
        console.log(`${i} - четное число`)
    }
    else {
        console.log(`${i} - нечетное число`)
    }
    
}

console.log('2. Дан массив [1, 2, 3, 4, 5, 6, 7]\nСделайте из этого массива следующий [1, 2, 3, 6, 7]')

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log([...arr.slice(0, 3), ...arr.slice(5)])
const removed = arr.splice(3, 2);
console.log(arr)

console.log('3. Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов \n1. Рассчитать сумму элементов этого массива \n2. Найти минимальное число \n3. Найти есть ли в этом массиве число 3')
const newArr = [];
for (let i = 0; i <= 5; i++) {
    newArr[i] = Math.floor(Math.random() * 9);
}
console.log('Массив: ' + newArr);

let arrSum = 0;
let min = newArr[0];

newArr.forEach(element => {
    arrSum = arrSum + element;
    if (min > element) min = element;
});
console.log(`Минимальное число в массиве - ${min}`);
console.log(`Сумма чисел в массиве - ${arrSum}`);
const isThree = newArr.indexOf(3) === -1 ? 'нет': 'есть';
console.log(`Число 3 в массиве - ${isThree}`);

console.log('4. *Необязательное задание. * \nНеобходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:')

for (let i = 1; i <= 20; i++) {
    const starsArr = [];
    for (let j = 1; j <= i; j++) {
        starsArr[j] = '*';
    }
    console.log(starsArr.join(''))
}