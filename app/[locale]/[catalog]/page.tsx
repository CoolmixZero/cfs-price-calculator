import { useTranslations } from "next-intl";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ClientOnly from "../ClientOnly";
import GridContainer from "./GridContainer";
import { formToJSON } from "axios";

export default function Catalog () {
  const t = useTranslations('Index');
  const c = useTranslations('Catalog');
  const f = useTranslations('Filter');

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
          filter_title={f("title")} 
          title_dynamics={f("title_dynamics")}
          title_price={f("title_price")}
          only_exclusives={f("only_exclusives")}
          min_speed={f("min_speed")}
          max_acceleration={f("max_acceleration")}
          min_price={f("min_price")}
          max_price={f("max_price")}
          apply={f("apply")}
          search_placeholder={f("search_placeholder")}

          filter_by={f("filter_by")}
          filter_by_title={f("filter_by_title")}
          filter_by_speed={f("filter_by_speed")}
          filter_by_acceleration={f("filter_by_acceleration")}
          filter_by_min_price={f("filter_by_min_price")}
          filter_by_max_price={f("filter_by_max_price")}

          speed={c("speed")} 
          currency={c("currency")} 
          speed_units={c("speed_units")} 
          time_units={c("time_units")} 
          acceleration={c("acceleration")}
          auction={c("auction")}
          load_more={c("load_more")}

          empty_title={c("empty_title")}
          empty_subtitle={c("empty_subtitle")}
        />
      </div>
    </ClientOnly>
  )
}