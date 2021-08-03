# marusya-types

Тайпинги для [протокола запросов/ответов](https://vk.com/dev/marusia_skill_docs8) в навыках Маруси.

## Установка
```
npm i -D marusya-types
```

## Использование
```ts
import { ReqBody, ResBody } from 'marusya-types';

function handler(reqBody: ReqBody): ResBody {
  ...
}
```
## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
