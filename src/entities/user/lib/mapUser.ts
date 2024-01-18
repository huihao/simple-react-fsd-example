import { User } from '../model/types';
import { mapUserDetails } from './mapUserDetails';

export const mapUser = (user: User) => {
  return mapUserDetails(user);
};
