import { Html, useProgress } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function Loader({ setLoadingDone }) {
  const { progress } = useProgress();
  const timeoutStarted = useRef(false); // Track if fallback timer has started

  useEffect(() => {
    console.log(`progress: ${progress.toFixed(0)}`);

    // If we already started fallback timeout, skip
    if (timeoutStarted.current) return;

    if (progress >= 100) {
      setLoadingDone("100"); // fully loaded
    } else if (progress >= 90) {
      timeoutStarted.current = true;
      setTimeout(() => {
        setLoadingDone("100"); // fallback unlock
      }, 3000);
    } else {
      setLoadingDone(progress.toFixed(0));
    }
  }, [progress, setLoadingDone]);

  return (
    <Html fullscreen>
      <div className="fixed inset-0 flex items-center justify-center bg-red-400 text-black text-2xl font-bold z-[999]">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
