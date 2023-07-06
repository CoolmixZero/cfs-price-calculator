import {useTranslations} from 'next-intl';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import CalculatorForm from './components/CalculatorForm';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <Navbar author={t("author")}/>
      <Hero title={t("title")} title_description={t("title_description")} />
      <CalculatorForm 
        title={t("form_title")}
        subtitle={t("form_subtitle")} 
        client_price_field={t("client_price_field")} 
        sell={t("sell")}
        buy={t("buy")}
        mode1={t("mode_master")}
        mode2={t("mode_apprentice")}
        mode3={t("mode_amateur")}
      />
    </div>
  );
}