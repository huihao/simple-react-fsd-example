import { setupWorker } from 'msw/browser';
import { handlers } from './handle';
import { __serverStartDatabaseMigration } from '../lib/server';

export const worker = setupWorker(...handlers);

__serverStartDatabaseMigration();

export const startApiMockWorker = async () => {
  await worker.start({
    onUnhandledRequest(req, print) {
      if (/\.(png|jpg|svg|tsx?|css|jsx?|woff2)$/.test(req.url)) {
        return;
      }

      print.warning();
    },
  });
};
