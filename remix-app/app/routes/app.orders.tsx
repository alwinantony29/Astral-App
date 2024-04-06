import { Link, useLoaderData } from "@remix-run/react";
import {
  Badge,
  Card,
  Checkbox,
  DataTable,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import axios from "axios";
import React from "react";
import { DateTime } from "luxon";

export async function loader() {
  const { data } = await axios.get("http://localhost:3000/order");
  return data;
}

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
                "text",
                "text",
                "text",
                "text",
                "text",
                "numeric",
              ]}
              headings={[
                <Checkbox checked={false} />,
                "Orders",
                "Date",
                "Customer",
                "Payment Status",
                "Fulfillment Status",
                "Total",
              ]}
              rows={orders.map((orderDetails) => [
                <Checkbox />,
                <Link to={orderDetails.id}>{orderDetails.id}</Link>,
                DateTime.fromISO(orderDetails.date).toFormat("dd/MM/yyyy"),
                orderDetails.customerName,
                <Badge
                  tone={
                    orderDetails.paymentStatus === "Paid"
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
