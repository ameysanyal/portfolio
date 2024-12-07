/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "html-to-text" {
  export interface HtmlToTextOptions {
    wordwrap?: number | false;
    preserveNewlines?: boolean;
    selectors?: SelectorDefinition[]; // Include SelectorDefinition if used in options
    // Add other options you might be using
  }

  export interface SelectorDefinition {
    selector: string; // CSS selector, e.g., "p", "div"
    format?: string; // Custom format name
    options?: Record<string, any>; // Custom options for the format
  }

  export function convert(html: string, options?: HtmlToTextOptions): string;
  export function htmlToText(html: string, options?: HtmlToTextOptions): string;
}
