import "../globals.css"
 
interface CatalogLayoutProps {
  children: React.ReactNode,
  params: any
}

const CatalogLayout: React.FC<CatalogLayoutProps> = ({children, params}) => {
  return (
    <section>
      {children}
    </section>
  );
}

export default CatalogLayout;