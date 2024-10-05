import Header from "@/components/Header";
import "./globals.css"; //  Imports global CSS styles that apply across the entire application.
import { Inter } from "next/font/google"; //Imports the Inter font from Google Fonts using Next.js's font optimization.
import ActiveSectionContextProvider from "@/context/ActiveSectionContext"; //Imports a context provider for managing the "active section" of the app, used for navigation or highlighting the current section.
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext"; // Imports a context provider for managing the theme (light/dark mode) across the app.
import { Toaster } from "react-hot-toast";
import { Metadata } from "next"; // Imports the Metadata type from Next.js, which is used to specify metadata for SEO (like title, description).

// Font Configuration
const inter = Inter({ subsets: ["latin"] }); // This initializes the Inter font, specifying the latin subset, ensuring that this font is loaded and optimized for Latin script.

export const metadata: Metadata = {
  title: "Amey's Portfolio",
  description: "Hire me as full stack or frontend or backend developer",
};
// Defines metadata for the webpage, including the title and description, which are useful for SEO and displayed in the browser tab.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* This div creates a blurred circular background effect on the page: Positioned absolute at the top-right  */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        {/* Another background circle effect positioned on the left side of the page. It also changes color in dark mode and has a larger size for responsiveness at different screen sizes. */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

// //The @/ alias refers to the root of the project.

//This defines the RootLayout functional component,
// which accepts children as props. children represents any content
// that will be dynamically injected into the layout (like pages).

//ReactNode does not take any parameters,ReactNode does not take any parameters.
//The most common use case for ReactNode is typing children.
//scroll smooth is used for scrolling smooth

//The body tag sets the font to Inter using ${inter.className}
// and applies utility classes from Tailwind CSS

//Layout Rendering: The browser first renders the layout (layout.tsx), which includes the Header, Footer, and any other global components.
// Page Injection: Next.js then places the content from the page.tsx file into the {children} placeholder in the layout.
// This is how the page-specific content gets rendered inside the layout structure.
// When a route is accessed, Next.js automatically renders the content from the page.tsx file inside the layout.tsx at the position of the {children} prop.
