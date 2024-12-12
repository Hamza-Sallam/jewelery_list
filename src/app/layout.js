import "./globals.css";
export const metadata = {
  title: "Jewelry Listing List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
