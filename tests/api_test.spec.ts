import { test, expect } from "@playwright/test";

const baseURL: string = "https://reqres.in/api";

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete(baseURL + "/users/2", {
    headers: {
      "x-api-key": "here-is-a-fake-api-key",
    },
  });

  expect(response.status()).toBe(204);

  const responseBody = await response.text();
  expect(responseBody).toEqual("");
});

test("API POST Request", async ({ request }) => {
  const response = await request.post(baseURL + "/users", {
    headers: {
      "x-api-key": "here-is-a-fake-api-key",
    },
    data: {
      name: "John Doe",
      job: "Software Engineer",
    },
  });

  expect(response.status()).toBe(201);

  const responseData = await response.json();

  expect(responseData.name).toEqual("John Doe");
  expect(responseData.job).toEqual("Software Engineer");
  expect(responseData.id).toBeDefined();
  expect(responseData.createdAt).toBeDefined();
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put(baseURL + "/users/2", {
    headers: {
      "x-api-key": "here-is-a-fake-api-key",
    },
    data: {
      name: "Jane Doe",
      job: "Senior Software Engineer",
    },
  });

  expect(response.status()).toBe(200);

  const responseData = await response.json();

  expect(responseData.name).toEqual("Jane Doe");
  expect(responseData.job).toEqual("Senior Software Engineer");
  expect(responseData.updatedAt).toBeDefined();
});

test("API GET Request", async ({ request }) => {
  const response = await request.get(baseURL + "/users/2");

  expect(response.status()).toBe(200);

  const responseData = await response.json();

  expect(responseData.data.id).toEqual(2);
  expect(responseData.data.email).toEqual("janet.weaver@reqres.in");
  expect(responseData.data.first_name).toEqual("Janet");
  expect(responseData.data.last_name).toEqual("Weaver");
});


