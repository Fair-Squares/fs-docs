#!/usr/bin/env node
// Simple advisory script: prefer yarn but do not hard fail in CI where npm may invoke.
if (!process.env.npm_execpath) process.exit(0);
const execPath = process.env.npm_execpath.toLowerCase();
if (execPath.includes('yarn')) {
  process.exit(0);
}
console.log('\n⚠️  This project prefers Yarn (see package.json engines). You are using a non‑Yarn client.');
console.log('    You can continue, but for reproducible builds run: yarn install\n');
