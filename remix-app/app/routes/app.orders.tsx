import { Card, DataTable, Layout, Page } from "@shopify/polaris";
import React from "react";

const OrdersPage = () => {
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
              rows={[]}
              //   totals={["", "", "", 255, "$155,830.00"]}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default OrdersPage;
