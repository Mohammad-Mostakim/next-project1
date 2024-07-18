
import Setting from "@core/Setting";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Setting>
          {children}
        </Setting>
      </body>
    </html>
  );
}
