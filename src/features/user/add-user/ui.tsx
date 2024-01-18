import { UserInfo, useAddUserMutation } from '@/entities/user';
import { Button, Drawer, Form, Space } from 'antd';
import { useState, useEffect } from 'react';
export const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [addUser, { isLoading, isSuccess }] = useAddUserMutation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
    const now = new Date().valueOf();
    addUser({ user: { ...values, createAt: now, updatedAt: now } });
  };

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
      form.resetFields();
    }
  }, [isSuccess, form]);

  return (
    <>
      <Button onClick={showDrawer}>新建用户</Button>
      <Drawer title="新建用户" onClose={onClose} open={open}>
        <Form disabled={isLoading} form={form} name="control-hooks" onFinish={onFinish}>
          <UserInfo></UserInfo>
          <Form.Item>
            <Space>
              <Button disabled={isLoading} type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
