const { By } = require("selenium-webdriver");

const addMovie = async (driver) => {
  const movieInput = await driver.findElement(By.xpath("//input"));
  movieInput.sendKeys("Toy Story");
  const addButton = await driver.findElement(By.xpath("//button"));
  addButton.click();
};

const deleteMovie = async (driver) => {
  const deleteButton = await driver.findElement(By.id("ToyStory"));
  deleteButton.click();
  const message = await driver.findElement(By.id("message"));
  expect(await message.getText()).toBe("Toy Story deleted!");
};

const crossOffMovie = async (driver) => {
  const movieTitle = await driver.findElement(By.xpath("//span"));
  movieTitle.click();
  const message = await driver.findElement(By.id("message"));
  expect(await message.getText()).toBe("Toy Story watched!");
};

module.exports = { addMovie, deleteMovie, crossOffMovie };
