import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // User site (repo: penningjoy.github.io) → served at root, base stays '/'.
  // When you buy a domain later (e.g. joydeepbanerjee.dev), change this one line
  // and add a public/CNAME file containing the bare domain.
  site: 'https://penningjoy.github.io',
});
