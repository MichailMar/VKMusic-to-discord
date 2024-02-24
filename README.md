# VKMusic-to-discord

Данный проект предоставляет возможность транслировать активный трек из ВКонтакте в Discord (в статус игры).

![Пример работы](https://github.com/MichailMar/VKMusic-to-discord/assets/63363137/392b5f94-ea61-4910-af40-69a7ccf1ffa7)

## Инструкция по установке

1. Установите необходимые библиотеки:

```
pip install pypresence
pip install flask
pip install flask_cors
```

2. Упакуйте расширение. Для этого перейдите в настройки расширений вашего браузера, включите режим разработчика и нажмите "Загрузить распакованное".
![Пример упаковки](https://github.com/MichailMar/VKMusic-to-discord/assets/63363137/d3fb8881-603e-453f-b8b7-03def47d62b9)

3. Укажите свой Client ID приложения. Создать его можно [по этой ссылке](https://discord.com/developers/applications/).

4. Запустите `server.py`, откройте страницу https://vk.com/audios(ваш айди) и наслаждайтесь. Функциональность на других страницах не проверялась.
