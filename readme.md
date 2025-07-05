# Playwirght API Test Automation

This repository demonstrates how to perform API testing using [Playwright](https://playwright.dev/).

**API Endpoint:** [`https://reqres.in/`](https://reqres.in/)

---

## 🚀 Getting Started

### 1. Project Initialization

Set up a new Playwright project:

```bash
npm init playwright@latest
```

### 2. Install Dependencies

Ensure all dependencies are installed:

```bash
npm install
```

### 3. Running Tests

Execute all API tests:

```bash
npx playwright test
```

### 4. Interactive Test UI

Launch the Playwright Test UI for interactive debugging:

```bash
npx playwright test --ui
```

### 5. Viewing Test Reports

Generate and open the latest test report:

```bash
npx playwright show-report
```

## 🧩 Project Structure

```
.
├── tests/           # API test files
├── playwright.config.ts
├── package.json
└── README.md
```

## 📚 References

- [Playwright API Testing Documentation](https://playwright.dev/docs/api-testing)
- [APIRequestContext Class](https://playwright.dev/docs/api/class-apirequestcontext)
- [Response Class](https://playwright.dev/docs/api/class-response)
- [APIResponseAssertions Class](https://playwright.dev/docs/api/class-apiresponseassertions)
- [YouTube Tutorial: Playwright API Testing](https://www.youtube.com/watch?v=EEjyLfp6DoQ)