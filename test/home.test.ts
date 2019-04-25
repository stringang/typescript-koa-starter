import request from "supertest";
import server from "../src/server";

// jest.mock()
describe("#Test", () => {
  test("GET /", async () => {
    let response = await request(server).get("/");
    return expect(response.status).toEqual(201);
  });
});
