#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "solanajobs",
  boardId: "solanajobs-official",
  domain: "jobs.solana.com",
  npmName: "zc-solanajobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
