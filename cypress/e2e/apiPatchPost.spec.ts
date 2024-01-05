// i want to test patch api from website https://jsonplaceholder.typicode.com/
// 1. i create this describe
// and run cy:open then test
// the result is No tests found.
describe("Api Patch Post", () => {
  // this test is success
  it("kalau ekspektasi sesuai realita", () => {
    expect(true).to.equal(true);
  });

  // this test is failed
  it("kalau ekspektasi tidak sesuai realita", () => {
    expect(true).to.equal(false);
  });
});
