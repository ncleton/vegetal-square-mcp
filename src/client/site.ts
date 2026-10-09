import { createPrestashopAdapter } from "./platform.js";

export const adapter = createPrestashopAdapter({
  origin: "https://www.vegetalsquare.com",
  hosts: ["www.vegetalsquare.com","vegetalsquare.com"],
});
