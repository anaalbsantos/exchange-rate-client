import type { Metadata } from 'next';

import NextAuthSessionProvider from 'providers/sessionProvider';
import StyledComponentsRegistry from 'providers/registry';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'A simple boilerplate for next.js',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
