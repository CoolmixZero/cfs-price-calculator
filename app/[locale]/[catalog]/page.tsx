import { useTranslations } from "next-intl";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import CardGrid from "./CardGrid";

export default function Catalog () {
  const t = useTranslations('Index');
  const c = useTranslations('Catalog');

  return (
    <div className='h-full pb-6'>
      <Navbar author={t("author")} calculator={t("form_title")} catalog={t("nav_catalog")}/>
      <Hero title={c("title")} title_description={c("title_description")} />
      <CardGrid 
        speed={c("speed")} 
        currency={c("currency")} 
        speed_units={c("speed_units")} 
        time_units={c("time_units")}
        acceleration={c("acceleration")}
      />
    </div>
  )
}