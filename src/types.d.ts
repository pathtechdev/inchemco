// Global type declarations
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Declare modules for libraries if types are missing
declare module 'lucide-react' {
  export const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Menu: React.FC<React.SVGProps<SVGSVGElement>>;
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Facebook: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Instagram: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Linkedin: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Twitter: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Youtube: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Mail: React.FC<React.SVGProps<SVGSVGElement>>;
} 