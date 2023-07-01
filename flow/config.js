import { config } from "@onflow/fcl";

config({
   "flow.network": "testnet",
  "app.detail.title": "Beon Flow Project",
  "app.detail.icon": "https://i.imgur.com/r23Zhvu.png",
  "accessNode.api": process.env.NEXT_PUBLIC_ACCESS_NODE_API,
  "discovery.wallet": process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
  "0xProfile": process.env.NEXT_PUBLIC_CONTRACT_PROFILE, 
})