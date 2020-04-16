Feature('Connections Test');

// перед каждым сценарием - заход на страницу и логин
// todo - надо как то вынести этот кусок - сейчас копипастится в каждом тесте
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

Scenario('test render connections', async (I) => {
  // Видим что баннер отрендерился со всеми своими элементами - картинка, меню, элементы меню
  await I.seeElement('#connections');
  await I.seeElement('#connectionsButton');
});

Scenario('test open connection controls', async (I) => {
  // по клику меню - страница скроллится
  await I.dontSeeElement('#connectionsControl');
  await I.seeElement('#connectionsButton');
  await I.click('#connectionsButton');
  await I.waitForElement('#connectionsControl');
});
