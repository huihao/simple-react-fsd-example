import { AppProvider } from '@app/providers/app';
import { AppRoutes } from '@app/routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
