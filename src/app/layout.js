import "./globals.css";
import SlideBar from "@/components/sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex gap-2"
      >
        <SlideBar />
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </body>
    </html>
  );
}
