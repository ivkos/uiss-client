uiss-client
=============
[![npm](https://img.shields.io/npm/v/uiss-client.svg)](https://www.npmjs.com/package/uiss-client)
[![npm](https://img.shields.io/npm/dt/uiss-client.svg)](https://www.npmjs.com/package/uiss-client)
[![npm](https://img.shields.io/npm/l/uiss-client.svg)]()

## Описание
`uiss-client` е node.js клиент за [УИСС](http://student.tu-sofia.bg) на Технически университет - София, позволяващ автоматизиране на проверката на оценки и получаване на информация за студент.

## Инсталиране
```
npm install uiss-client
```

## Примери
```js
const UissClient = require('uiss-client');

const egn = '94xxxxyyyy';
const facultyId = 'xxxx13yyy';
```

```js
UissClient
    .login(egn, facultyId)
    .then(session => {
        return session.getStudent()
            .then(student => console.log(student))
            .then(() => session.logout());
    })
    .catch(err => console.error(err));
    
```

```js
const moment = require("moment");

UissClient
    .login(egn, facultyId)
    .then(session => {
        return session.getGrades()
            .then(grades => {
                // Филтрира само оценките, внесени на и след 30.06.2016
                const latest = grades.filter(
                    g => g.lastUpdate && g.lastUpdate.isSameOrAfter(moment("30.06.2016", "DD.MM.YYYY"))
                );
                
                console.log(latest);
            })
            .then(() => session.logout())
            .catch(err => console.error(err));
    });
```

## Документация на UissClient
#### static Promise\<UissClient\> login(egn, facultyId)
Създава нова сесия в УИСС като се логва с подадените ЕГН (`egn`) и факултетен номер (`facultyId`). Връща `Promise<UissClient>` с инстанция на `UissClient` за текущата сесия.

> Вижте [документацията на Promise в MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) и примерите по-горе за това как се използва `Promise`.

#### Promise\<Student\> getStudent()
Извлича информацията за студента от текущата сесия. Връща `Promise<Student>`. Обектът `Student` е с подобна на тази структура:
```
Student {
  _name: 'XXXXXXXXXXXXXX',
  _facultyId: 'XXXXXXXX',
  _facultyName: 'XXXXXXXXXXXXXXXXXXXXX',
  _major: 'XXXXXXXXXXXXXX',
  _degreeType: 'Редовно',
  _email: 'XXXXXX@gmail.com',
  _status: '$12Действащ',
  _semester: 6,
  _completedSemester: 6,
  _stream: N,
  _group: NN }
```

#### Promise\<Grade[]\> getGrades()
Извлича оценките на студента. Връща `Promise<Grade[]>` с масив от `Grade`. Обектът `Grade` е с подобна на тази структура:
```
 Grade {
    _gradeId: 44,
    _name: 'ПРОГРАМНИ СРЕДИ',
    _semesterId: 6,
    _controlForm: 'Изпит',
    _gradeText: 'мн.добър',
    _gradeNumeric: 5,
    _lastUpdate:
     { ... }
```
Полето `lastUpdate` е от тип `Moment`.

> Вижте [документацията на Moment.js](http://momentjs.com/docs/) и примерите по-горе за това как се използва `Moment`.

#### Promise logout()
Прекратява текущата сесия.

## Лиценз
`uiss-client` е свободен софтуер и се разпространява под [лиценза MIT](/LICENSE).
