import LedButtonMonitor from "./components/ledMonitor";

export default function Home() {
  return (
    <div className="mt-6">
      <h1 className="text-4xl font-bold text-center">
        Monitor and Control LED
      </h1>
      <LedButtonMonitor />
    </div>
  );
}
