// Depending on bundler interop, lottie-react may resolve to either:
// 1) the component function itself, or 2) a module object with .default.
// Normalize both shapes so React always receives a valid component type.
// This fixes error "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object."
import LottieComponent from 'lottie-react';
export type { LottieRefCurrentProps, LottieComponentProps } from 'lottie-react';

// This forces the evaluation of the default export
const Lottie =
  (LottieComponent as unknown as { default: typeof LottieComponent }).default ??
  LottieComponent;

export default Lottie;
