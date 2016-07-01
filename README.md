# uiss-client

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
    });
    
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
            .then(() => session.logout());
    });
```

## Лиценз
`uiss-client` е свободен софтуер и се разпространява под [лиценза MIT](/LICENSE).
