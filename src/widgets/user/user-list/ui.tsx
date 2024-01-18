import { selectUser, useUserSlice, useUsersQuery } from '@/entities/user';
import { AddUser } from '@/features/user/add-user';
import { DeleteUser } from '@/features/user/delete-user';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '手机',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '操作',
    dataIndex: 'id',
    key: 'operate',
    render: (value: number) => (
      <>
        <DeleteUser id={value}></DeleteUser>
      </>
    ),
  },
];

export const UserList = () => {
  useUserSlice();
  const { users } = useSelector(selectUser);
  const { isLoading } = useUsersQuery();
  console.log(users);
  return (
    <>
      <AddUser></AddUser>
      <Table loading={isLoading} rowKey="id" dataSource={users} columns={columns} />;
    </>
  );
};
