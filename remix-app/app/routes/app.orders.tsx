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
import React from "react";
import { DateTime } from "luxon";
import { authenticate } from "~/shopify.server";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin, session } = await authenticate.admin(request);

  const res = await admin.rest.resources.Order.all({
    session: session,
    status: "any",
  });
  console.log(res);

  return res;
}

const OrdersPage = () => {
  const orders = useLoaderData() || [];

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
