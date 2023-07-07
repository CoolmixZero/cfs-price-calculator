import { useTranslations } from "next-intl";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";

export default function Catalog () {
  const t = useTranslations('Index');
  const c = useTranslations('Catalog');
  return (
    <div className='h-full pb-6'>
      <Navbar author={t("author")} calculator={t("form_title")} catalog={t("nav_catalog")}/>
      <Hero title={c("title")} title_description={c("title_description")} />
    </div>
  )
}