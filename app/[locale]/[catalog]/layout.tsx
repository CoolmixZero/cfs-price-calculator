import "../globals.css"
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
 
interface CatalogLayoutProps {
  children: React.ReactNode,
  params: any
}

const CatalogLayout: React.FC<CatalogLayoutProps> = ({children, params}) => {
  const locale = useLocale();
  
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <section lang={locale}>
      {children}
    </section>
  );
}

export default CatalogLayout;