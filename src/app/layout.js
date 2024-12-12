import "./globals.css";
export const metadata = {
  title: "Engagment Rings",
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
