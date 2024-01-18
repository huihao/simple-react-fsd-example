import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="h-full w-full flex items-center justify-center"></div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '*', element: <Navigate to="." /> }],
  },
];
