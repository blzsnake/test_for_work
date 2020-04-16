Feature('LoginForm Test');

Before((I) => {
  I.amOnPage('http://localhost:8080');
});

Scenario('test render form', async (I) => {
  // рендерится форма - видим текст и кнопки
  await I.see('Личный кабинет', '#loginForm');
  await I.see('ВОЙТИ С ПОМОЩЬЮ PIN', '#loginForm');
  await I.see('ВОЙТИ С ПОМОЩЬЮ WWPASS', '#loginForm');
});

Scenario('test auth by pin', async (I) => {
  // жмем пин кнопку
  await I.click('#pinButton');
  // Видим появившееся поле с вводом пина
  await I.seeElement('[name = "pin"]');
  // Заполняем неверным значением
  await I.fillField('pin', '444444444');
  // Кликаем по кнопке логина
  await I.click('#loginButton');
  await I.see('Error: Incorrect pin', '#loginForm');
  // Заполняем верным значением
  await I.fillField('pin', '1234567890123');
  await I.click('#loginButton');
  // Видим появившийся в баннере текст - добро пожаловать
  await I.waitForText('Добро пожаловать')
});

Scenario('test auth by wwpass', async (I) => {
  // жмем wwpass кнопку
  await I.click('#wwpassButton');
  // Видим блок с штрихкодом
  await I.seeElement('#qrcode');
  await I.waitForElement('#qrcode img');
  // дальше мы сканируем код телефоном - пока это не эмулируется
});
