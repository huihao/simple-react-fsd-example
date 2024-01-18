import { usersMock } from '@/shared/lib/server';
import { type UserDto } from '../userApi';

// Example with faker
// import { faker } from '@faker-js/faker'
// const price = faker.datatype.number({ max: 50000, min: 500 })
// id: faker.datatype.number(),
// imageUrl: initialProps.imageUrl ?? [faker.image.food(150, 150)],
// name: faker.commerce.productName(),
// subtitle: faker.commerce.productDescription(),
// description: faker.commerce.productMaterial(),
// price,
// discountPrice: faker.datatype.number({ min: 1, max: price }),

export function mockProductDto(initialProps: Partial<UserDto> = {}): UserDto {
  return {
    data: usersMock,
    msg: {
      code: 900,
      msg: 'success',
      success: true,
      traceId: '123123',
    },
    traceId: '123123',
  };
}
