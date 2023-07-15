import { useTranslations } from "next-intl";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ClientOnly from "../ClientOnly";
import GridContainer from "./GridContainer";

export default function Catalog () {
  const t = useTranslations('Index');
  const c = useTranslations('Catalog');

  return (
    <ClientOnly>
      <div className='h-full pb-32'>
        <Navbar 
          author={t("author")} 
          calculator={t("form_title")} 
          catalog={t("nav_catalog")}
        />
        <Hero 
          title={c("title")} 
          title_description={c("title_description")} 
        />
        <GridContainer 
          speed={c("speed")} 
          currency={c("currency")} 
          speed_units={c("speed_units")} 
          time_units={c("time_units")} 
          acceleration={c("acceleration")}
          auction={c("auction")}
        />
      </div>
    </ClientOnly>
  )
}