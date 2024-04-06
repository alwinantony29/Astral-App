import { useLoaderData } from "@remix-run/react";
import { Badge, Card, DataTable, Layout, Page, Text } from "@shopify/polaris";
import axios from "axios";
import React, { useEffect } from "react";

export async function loader() {
  const { data } = await axios.get("http://localhost:3000/order");
  return data;
}

const data = [
  {
    order: 1,
    date: "06-04-2024",
    customer: "John Doe",
    paymentStatus: "paid",
    fulfillmentStatus: "unfulfilled",
    total: 1300,
  },
];
const OrdersPage = () => {
  const orders = useLoaderData();

  console.log(orders);
  return (
    <Page>
      <ui-title-bar title="Orders" />
      <Layout>
        <Layout.Section>
          <Card>
            <DataTable
              columnContentTypes={[
                "text",
                "numeric",
                "numeric",
                "numeric",
                "numeric",
                "numeric",
              ]}
              headings={[
                "Orders",
                "Date",
                "Customer",
                "Payment Status",
                "Fulfillment Status",
                "Total",
              ]}
              rows={orders.map((orderDetails) => [
                <Text as="span">{orderDetails.id}</Text>,
                orderDetails.date,
                orderDetails.customerName,
                <Badge
                  tone={
                    orderDetails.paymentStatus === "paid"
                      ? "success"
                      : "enabled"
                  }
                >
                  {orderDetails.paymentStatus}
                </Badge>,
                <Badge
                  tone={
                    orderDetails.fulfillmentStatus === "fulfilled"
                      ? "success"
                      : "enabled"
                  }
                >
                  {orderDetails.fulfillmentStatus}
                </Badge>,
                orderDetails.total,
              ])}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default OrdersPage;
