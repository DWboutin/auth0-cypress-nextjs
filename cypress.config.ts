import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  env: {
    auth0_username: process.env.AUTH0_E2E_USERNAME,
    auth0_password: process.env.AUTH0_E2E_PASSWORD,
    auth0_uri: process.env.AUTH0_ISSUER_BASE_URL,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
