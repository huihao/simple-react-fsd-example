import { db } from './serverDb';
import usersMock from './__mocks__/users.json';

export function startDatabaseMigration() {
  usersMock.forEach((row) => db.user.create(row));
}
