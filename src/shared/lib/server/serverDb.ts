import { factory, primaryKey } from '@mswjs/data';

/**
 * Its database, which using only in @mswjs "server" handlers
 * This handlers run in the browser (client side) and emulate
 * work with real API and database
 */
export const db = factory({
  user: {
    id: primaryKey(Number),
    email: String,
    name: String,
    role: String,
    createAt: Number,
    updateAt: Number,
  },
});
