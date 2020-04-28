# Webpack JS SCSS Builder

Сборка для упаковки js и scss файлов.

## Структура:

```
├── dist                        // директория выгрузки результата
├── src                         // исходники
│   ├── index.html              // html страница для тестирования
│   ├── index.js                // точка входа
│   ├── scripts
│   │   └── main.js             // js скрипт
│   └── styles
│       └── main.scss           // scss стили
└─── webpack
    ├── webpack.common.js       // общии настройки
    ├── webpack.config.dev.js   // настройки dev сервера
    └── webpack.config.prod.js  // настройки prod сервера
```

## Установка

```
yarn
```

### Запуск Dev Server

```
yarn start
```

> По умолчанию автоматическое открытие страницы в браузере отключено, чтобы открыть запущенный сервер перейтиде по ссылке http://localhost:8080/

### Сборка Prod Version

```
yarn build
```

## Особенности:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)