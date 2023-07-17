import "./globals.css"
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

export const metadata = {
  title: "CFS",
  description: "Car For Sale Calculator and Catalog",
};
interface LocaleLayoutProps {
  children: React.ReactNode,
  params: any
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({children, params}) => {
  const locale = useLocale();
  
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1865112126139577" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-cover bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}

export default LocaleLayout;