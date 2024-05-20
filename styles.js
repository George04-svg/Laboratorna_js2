// Функция для проверки, является ли число простым
function isPrime(num) {
  for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
  return num > 1;
}

// Функция для получения числа от пользователя
function getNumber(message) {
  let num;
  do {
      num = Number(prompt(message));
  } while (Number.isInteger(num) === false);
  return num;
}

// Основная функция
function main() {
  let num = getNumber("Введите число:");
  let multiples = [];
  for(let i = 0; i <= num; i++) {
      if(i % 5 === 0) multiples.push(i);
  }
  if(multiples.length === 0) {
      console.log("Sorry, no numbers");
  } else {
      console.log("Числа, кратные 5: " + multiples.join(", "));
  }

  let m = getNumber("Введите число m:");
  let n = getNumber("Введите число n:");
  if(m > n) [m, n] = [n, m]; // Обмен значений, если m > n
  let primes = [];
  for(let i = m; i <= n; i++) {
      if(isPrime(i)) primes.push(i);
  }
  if(primes.length === 0) {
      console.log("В данном диапазоне нет простых чисел");
  } else {
      console.log("Простые числа в диапазоне от " + m + " до " + n + ": " + primes.join(", "));
  }
}

main();