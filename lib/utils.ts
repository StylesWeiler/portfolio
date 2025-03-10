import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// helper function to make everything work harmonously with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const suppressThreeJsErrors = () => {
  // Store original console.error
  const originalConsoleError = console.error;
  
  // Replace with filtered version
  console.error = function(...args) {
    // Check if this is the specific Three.js NaN error
    const errorMessage = args[0]?.toString() || '';
    if (
      errorMessage.includes('THREE.BufferGeometry.computeBoundingSphere()') && 
      errorMessage.includes('NaN')
    ) {
      // Silently ignore this specific error
      return;
    }
    
    // Otherwise, pass through to original console.error
    originalConsoleError.apply(console, args);
  };

  // Return a cleanup function
  return () => {
    console.error = originalConsoleError;
  };
};
