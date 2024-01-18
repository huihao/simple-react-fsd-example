import { http, HttpResponse } from 'msw';
import { __serverDatabase, createBaseRepWrap } from '@/shared/lib/server';
import { User } from '../../model/types';

export const userHandlers = [
  http.get(`/user/list`, () => {
    const users = __serverDatabase.user.findMany({});

    return HttpResponse.json(createBaseRepWrap(users));
  }),
  http.post<{}, User>(`/user/add`, async ({ request, params }) => {
    const user = await request.json();
    user.id = __serverDatabase.user.count() + 1;
    const newUser = __serverDatabase.user.create(user);
    console.log(user);
    return HttpResponse.json(createBaseRepWrap(newUser));
  }),
  http.post<{}, { userId: number }>(`/user/delete`, async ({ request }) => {
    const { userId } = await request.json();
    const user = __serverDatabase.user.findFirst({
      where: {
        id: {
          equals: userId,
        },
      },
    });
    if (user) {
      __serverDatabase.user.delete({
        where: {
          id: {
            equals: userId,
          },
        },
      });
    }
    return HttpResponse.json(createBaseRepWrap({}));
  }),
];
