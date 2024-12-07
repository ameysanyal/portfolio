declare module "html-to-text" {
  export interface HtmlToTextOptions {
    // Add the options you're using
    wordwrap?: number | false;
    preserveNewlines?: boolean;
    // Add other options as needed
  }

  export function htmlToText(html: string, options?: HtmlToTextOptions): string;
}
