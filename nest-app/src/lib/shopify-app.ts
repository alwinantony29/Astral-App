import '@shopify/shopify-api/adapters/node'
import { ApiVersion, LogSeverity, shopifyApi } from '@shopify/shopify-api'
import { restResources } from '@shopify/shopify-api/rest/admin/2023-04'

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SCOPES.split(','),
  hostName: process.env.HOST.replace(/https?:\/\//, ''),
  hostScheme: process.env.HOST.split('://')[0] as 'https',
  apiVersion: ApiVersion.April23,
  isEmbeddedApp: true,
  logger: {
    level: LogSeverity.Info,
  },
  restResources,
})

export default shopify
