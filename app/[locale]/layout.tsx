import "./globals.css"
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
 
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
      <body className="bg-cover bg-gray-300 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}

export default LocaleLayout;