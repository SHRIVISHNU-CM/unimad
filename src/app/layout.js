import "./globals.css";
import SlideBar from "@/components/sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Unimad</title>
      </head>
      <body
        className="flex gap-2"
      >
        <SlideBar />
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </body>
    </html>
  );
}
