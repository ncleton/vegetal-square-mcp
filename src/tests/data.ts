import type { Captured } from "./platform-fixtures.js";

export const captured: Captured = {
  "query": "tofu",
  "productUrl": "https://www.vegetalsquare.com/accueil/625-assaisonnement-saveur-poulet-grille-650g-vetejal.html",
  "expected": {
    "productId": "625:0",
    "name": "Assaisonnement saveur poulet grillé 650g - Vétéjal",
    "price": 35.9
  },
  "searchRaw": [
    {
      "id_product": "625",
      "id_product_attribute": "0",
      "name": "Assaisonnement saveur poulet grillé 650g - Vétéjal",
      "url": "https://www.vegetalsquare.com/accueil/625-assaisonnement-saveur-poulet-grille-650g-vetejal.html",
      "price": "35,90 €",
      "regular_price": null,
      "unit_price": null,
      "brand": null,
      "flags": [],
      "button": "enabled",
      "availability": null
    }
  ],
  "productRaw": {
    "info": {
      "name": "Assaisonnement saveur poulet grillé 650g - Vétéjal",
      "sku": "VETEJAL02",
      "gtin": null,
      "brand": "Vétéjal",
      "description": "Donnez un goût de poulet grillé à vos recettes avec l&#039;assaisonnement bio Vétéjal. Sans gluten, sans glutamate et sans arômes artificiels. Livré en 24/48h.",
      "price": "35.9",
      "availability": "https://schema.org/InStock"
    },
    "id_product": "625",
    "id_product_attribute": "0",
    "data_quantity": 9999998,
    "button": "enabled",
    "ingredients": null,
    "nutrition": [
      {
        "label": "Énergie",
        "value": "284,7Kcal / 1191 kj"
      },
      {
        "label": "Matières grasses",
        "value": "0,1 g"
      },
      {
        "label": "- dont acides gras saturés",
        "value": "0 g"
      },
      {
        "label": "Glucides",
        "value": "57,9 g"
      },
      {
        "label": "- dont sucres",
        "value": "0 g"
      },
      {
        "label": "Protéines",
        "value": "6,9 g"
      },
      {
        "label": "Sel",
        "value": "12,5 g"
      }
    ],
    "url": "https://www.vegetalsquare.com/accueil/625-assaisonnement-saveur-poulet-grille-650g-vetejal.html",
    "unit_price": null
  },
  "cartEmpty": {
    "total_text": "0,00 €",
    "products": []
  },
  "cartFilled": {
    "quantity": 2,
    "raw": {
      "total_text": "71,80 €",
      "products": [
        {
          "id_product": "625",
          "id_product_attribute": "0",
          "name": "Assaisonnement saveur poulet grillé 650g - Vétéjal",
          "quantity": "2",
          "unit_price": 35.9,
          "line_total": 71.8,
          "available_quantity": null
        }
      ]
    }
  }
};
