///
// global.d.ts (in project root)
// import 'react';
// declare global {
//   namespace JSX {
//     interface IntrinsicElements extends React.JSX.IntrinsicElements {}
//   }
// }

// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
// }

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string;
  }
}
