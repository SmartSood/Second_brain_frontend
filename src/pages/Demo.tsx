import { Dashboard } from './Dashboard';

export function Demo() {
  return (
    <div>
      <div className="bg-purple-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Demo Brain</h1>
        <p className="text-purple-100">This is a sample shared brain to demonstrate SecondBrain's features</p>
      </div>
      <Dashboard shared={true} />
    </div>
  );
} 