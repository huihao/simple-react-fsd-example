import { Form, Input } from 'antd';

export const UserInfo = () => {
  return (
    <>
      <Form.Item name="name" label="Name" rules={[]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="phone" rules={[]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="email" rules={[]}>
        <Input />
      </Form.Item>
    </>
  );
};
