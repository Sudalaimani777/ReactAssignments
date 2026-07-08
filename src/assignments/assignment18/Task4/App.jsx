import { ShowTextProvider } from './context/ShowTextContext';
import Input from './components/Input';
import Text from './components/Text';

export default function App() {
  return (
    <ShowTextProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white p-4">
        <div className="w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-center mb-6">Task 4: Ref Input Display</h2>
          
          <Input />
          <Text />
          
        </div>
      </div>
    </ShowTextProvider>
  );
}