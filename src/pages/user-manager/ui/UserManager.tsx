/**
 *
 * UserManager
 *
 */
import { UserList } from '@/widgets/user/user-list';
import React, { memo } from 'react';

interface Props {}

export const UserManager = memo((props: Props) => {
  return (
    <div>
      <UserList></UserList>
    </div>
  );
});
