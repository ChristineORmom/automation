const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {
  addMovie,
  deleteMovie,
  crossOffMovie,
} = require("../functions/addMovie");

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/");
});
afterEach(async() => {
    await driver.sleep(1000);
})
afterAll(async () => {
 await driver.quit();
});

it('should add a movie', async () => {
  await addMovie(driver);
});

it('when movie is crossed off', async () =>{
    await crossOffMovie(driver);
});

it('should delete a movie', async () =>{
    await deleteMovie(driver);
});


