# Astral App

<div align="center">
<img src="https://i.imgur.com/3izpMqb.jpeg" width="150">

<p>Astral's Shopify app system.</p>
</div>

## What?

- This is a simple [npm workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) with 3 packages
  - remix-app
  - nest-app
  - prisma-db
- prisma-db is shared between remix-app and nest-app

## Development

See Guidelines and Instructions: https://www.notion.so/helloastral/App-Dev-Guide-f4f50bcc0ad34357bea2d5a47244adb6?pvs=4

## Gotchas

### 1. After a scope change I see `[object Object]` or `Handling response`

<img src="https://i.imgur.com/nUYQaBd.png" width="500">

You have to run this after every scope change, because this is a Shopify managed installation:

```bash
npm run deploy
```

> Another issue we saw on docs was related to windows. Solution is to synchronize windows clock: see [this](https://github.com/Shopify/shopify-app-template-remix/issues/286#issuecomment-1767949657)
