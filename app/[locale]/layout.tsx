import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Script from 'next/script';

import { ThemeProvider } from '@/providers/theme-provider';
import Header from '@/components/layout/header';
import CartFAB from '@/features/cart/components/CartFAB';
import SplashScreen from '@/components/common/SplashScreen';
import { Outfit } from 'next/font/google';
import "@/app/globals.css";
import InstallPwaBanner from '@/components/common/install-pwa-banner';


const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col font-sans ${outfit.className}`}>

        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SplashScreen />
            <Header />
            <main className="flex-1 flex flex-col pt-20 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">

              {children}
            </main>

            <CartFAB />
            <InstallPwaBanner />
            <Script id="register-sw" strategy="afterInteractive">
              {`
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(
                      function(registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);
                      },
                      function(err) {
                        console.log('Service Worker registration failed: ', err);
                      }
                    );
                  });
                }
              `}
            </Script>
          </ThemeProvider>


        </NextIntlClientProvider>
      </body>
    </html>
  );
}




