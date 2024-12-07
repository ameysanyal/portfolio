declare module "html-to-text" {
  export interface HtmlToTextOptions {
    wordwrap?: number | false;
    preserveNewlines?: boolean;
    // Add other options you might be using
  }

  export function convert(html: string, options?: HtmlToTextOptions): string;
  export function htmlToText(html: string, options?: HtmlToTextOptions): string;
}
