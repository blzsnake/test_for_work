const assert = require('assert');

Feature('Banner Test');

// перед каждым сценарием - заход на страницу и логин
Before(async (I) => {
  await I.amOnPage('http://localhost:8080');
  let lang = async () =>{
    let x = await I.executeScript(() => localStorage.getItem('token'));
  };
  await I.click('#pinButton');
  await I.fillField('pin', '1234567890123');
  await I.click('#loginButton');
  lang();
});

Scenario('test render banner', async (I) => {
  // Видим что баннер отрендерился со всеми своими элементами - картинка, меню, элементы меню
  await I.seeElement('#banner');
  await I.seeElement('.test-banner-image');
  await I.seeElement('.test-banner-menu');
  await I.seeElement('.test-banner-switch');
});

Scenario('test scroll from menu', async (I) => {
  // по клику меню - страница скроллится
  let { y } = await I.grabPageScrollPosition();
  assert.equal(y, 0);
  await I.click('.test-banner-switch:nth-child(3)');
  y = await I.grabPageScrollPosition().y;
  assert.notEqual(y, 0);
});
