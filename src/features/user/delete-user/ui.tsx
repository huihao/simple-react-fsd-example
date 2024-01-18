import { useDeleteUserMutation } from '@/entities/user';
import { Button } from 'antd';

interface IProps {
  id: number;
}
export const DeleteUser = (props: IProps) => {
  const { id } = props;
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const handleClick = () => {
    if (id) {
      deleteUser({ userId: id });
    }
  };
  return (
    <div>
      <Button disabled={isLoading} onClick={handleClick}>
        删除用户
      </Button>
    </div>
  );
};
