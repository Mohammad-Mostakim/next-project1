
import Setting from "@core/Setting";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { MainLayout } from "./(MainLayout)";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Setting>
          <NextTopLoader
           showSpinner={false}
          />
          <MainLayout>
            {children}
          </MainLayout>
        </Setting>
        
      </body>
    </html>
  );
}
