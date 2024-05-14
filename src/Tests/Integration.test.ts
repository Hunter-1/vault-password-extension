import Controller from "./data/mock-server/MockController";

//Mock Server must be active for these Tests

test("Integration Test 1: Construct Controller", async () => {
  const controller: Controller = await Controller.init();
  expect(controller.model.getItemCount()).toBe(30);
});

test("Integration Test 2: CallPasswordEntry", async () => {
  const controller: Controller = await Controller.init();
  await controller.callPasswordEntry("44eca64b-7d00-4968-9b28-ed26d8ba1462");
  expect(
    controller.model.getEntry("44eca64b-7d00-4968-9b28-ed26d8ba1462")?.password
  ).toBe("12345");
});

test("Integration Test 3: changePage", async () => {
  const controller: Controller = await Controller.init();
  await controller.nextPage();
  expect(controller.model.getCurrentPage()).toBe(20);
  expect(controller.model.getEntriesByName()[0].title).toBe("A Test Password");
});
