// Fichier généré par generate.mjs à partir de retailers/vegetal-square/spec.json. Ne pas modifier ici.
export interface ScopeField { key: string; env: string; description: string; example: string; pattern?: string }
export const RETAILER: {
  id: string; slug: string; version: string; label: string; origin: string; entryUrl: string; loginUrl: string; signupUrl: string;
  platform: string; fulfillment: ReadonlyArray<"delivery" | "click_and_collect">; accountRequired: boolean;
  scopeFields: ReadonlyArray<ScopeField>;
} = {
  "id": "vegetal-square",
  "slug": "vegetal_square",
  "version": "0.1.1",
  "label": "Vegetal Square",
  "origin": "https://www.vegetalsquare.com",
  "entryUrl": "https://www.vegetalsquare.com/",
  "loginUrl": "https://www.vegetalsquare.com/connexion",
  "signupUrl": "https://www.vegetalsquare.com/connexion?create_account=1",
  "platform": "prestashop",
  "fulfillment": [
    "delivery",
    "click_and_collect"
  ],
  "accountRequired": false,
  "scopeFields": []
};
