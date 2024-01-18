/**
 *
 * Asynchronously loads the component for StoreManagement
 *
 */

import { lazyLoad } from '@/shared/lib/loadable';

export const UserManager = lazyLoad(
  () => import('./UserManager'),
  (module) => module.UserManager
);
