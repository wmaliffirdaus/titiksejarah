#!/usr/bin/env node
// Renders an HTML study-notes page to an A4 PDF. Usage: node engine/nota_pdf.mjs <in.html> <out.pdf>
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [inp, out] = process.argv.slice(2);
const br = await chromium.launch();
const page = await br.newPage();
await page.goto(pathToFileURL(path.resolve(inp)).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, preferCSSPageSize: true });
await br.close();
console.log('pdf ->', out);
