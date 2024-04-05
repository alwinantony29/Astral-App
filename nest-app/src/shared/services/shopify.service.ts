import { Injectable } from '@nestjs/common'
import '@shopify/shopify-api/adapters/node'

import shopify from 'src/lib/shopify-app'
import { PrismaService } from './prisma.service'
import { RestClient } from '@shopify/shopify-api/lib/clients/admin/rest/client'
import { GraphqlClient } from '@shopify/shopify-api/lib/clients/admin/graphql/client'
import { Session } from '@shopify/shopify-api'

@Injectable()
export class ShopifyService {
  shopify: typeof shopify

  constructor(public readonly prisma: PrismaService) {
    this.shopify = shopify
  }

  getRestClient(session: Session): RestClient {
    return new this.shopify.clients.Rest({ session })
  }

  getGQLClient(session: Session): GraphqlClient {
    return new this.shopify.clients.Graphql({ session })
  }

  get api() {
    return this.shopify
  }
}
