import { json } from "@remix-run/node";
import type { AdminApiContext } from "~/shopify.server";

export const createRandomProduct = async (admin: AdminApiContext) => {
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `
      #graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }],
        },
      },
    },
  );
  const responseJson = await response.json();

  return json({
    type: "createProduct" as const,
    product: responseJson.data?.productCreate?.product,
  });
};

export const deleteProduct = async (admin: AdminApiContext) => {
  console.log("Running delete action");

  return json({
    type: "deleteProduct" as const,
    message: "Delete action",
  });
};
