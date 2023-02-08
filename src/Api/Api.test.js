const api = require("./Api");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({test: {id: "pass"}}),
  })
);

beforeEach(() => fetch.mockClear());

it("returns JSON", async () =>{
  const apiRes = await (await api);
  
  expect(apiRes).toEqual({test: {id: "pass"}});
});