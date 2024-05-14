import Model from "../Model/Model";

test("Unit Test 1: Construct Model", () => {
  const data = require("./data/data1.json");
  const model: Model = new Model(data);
  expect(model.getItemCount()).toBe(1);
});

test("Unit Test 2: updateEntry", () => {
  const data = require("./data/data1.json");
  const passwordData = require("./data/password1.json");
  const model: Model = new Model(data);
  model.updateEntry("44eca64b-7d00-4968-9b28-ed26d8ba1462", passwordData);
  const passwordEntry = model.getEntry("44eca64b-7d00-4968-9b28-ed26d8ba1462");
  expect(passwordEntry?.password).toBe("12345");
});

test("Unit Test 3: getEntriesByName", () => {
  const data = require("./data/data2.json");
  const model: Model = new Model(data);
  const orderedPasswords = model.getEntriesByName();
  expect(orderedPasswords[0].id).toBe("5");
});

test("Unit Test 4: getEntriesByURL", () => {
  const data = require("./data/data2.json");
  const model: Model = new Model(data);
  const orderedPasswords = model.getEntriesByURL();
  expect(orderedPasswords[0].id).toBe("3");
});
