export const createBaseRepWrap = (data: any) => {
  return {
    data: data,
    msg: {
      code: 900,
      msg: 'success',
      success: true,
      traceId: '123123',
    },
    traceId: '123123',
  };
};
