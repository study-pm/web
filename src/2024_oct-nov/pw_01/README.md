# ПР 1 - Основы синтаксиса. Операторы

## Serve app

### Live-server (frontend)
```sh
npm run serve-live
```

### Docker (backend)

## Задачи

1. Создайте переменные `a1`, `a2`, `a3`, `a4`. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
   - `5 + 3`,
   - `5 - 3`,
   - `5 * 3`,
   - `5 / 3`,

    поместив результат каждого выражения в соответствующую переменную. Например,
    ```js
    let a1 = 5 + 3
    ```

    [Solution](./index.html#task_01)

2. Создайте переменные `a6`, `a7`, `a8`, `a9`, `a10`. Поместите в них результат выражений:

   - `5 % 3`,
   - `3 % 5`,
   - `5 + '3'`,
   - `'5' - 3`,
   - `75 + 'кг'`

    [Solution](./index.html#task_02)

3. Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную `height`), шириной 10см (в числовую переменную `width`), значение площади должно храниться в числовой переменной `s`.

4. Вычислить значение функции `y=7x^2+3x+6` при любом значении `x`;

5. Известны количество жителей в государстве и площадь его территории. Найти плотность населения в государстве.

6. Реализуйте проверку возраста пользователя, и отталкиваясь от возраста выводите ему различную информацию на страницу

    ```js
    let age = prompt()
    if….
    ```

7. Напишите программу, которая будет запрашивать количество друзей пользователя (`prompt`)

    Исходя из количества друзей, запрашивать имя каждого друга (через цикл добавлять в массив) и выводить список друзей на страницу
    ```js
    let arr = []
    arr.push(‘имя’) // – добавление в массив
    ```
