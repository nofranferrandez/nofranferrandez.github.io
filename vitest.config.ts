import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/utils/math/**/*.test.ts'],
    environment: 'node',
    passWithNoTests: false,
  },
});
