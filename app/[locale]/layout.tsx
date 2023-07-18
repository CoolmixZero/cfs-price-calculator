import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CFS",
  description: "Car For Sale Calculator and Catalog",
};
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any;
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({ children, params }) => {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  // function signalGooglefcPresent() {
  //   if (!window.frames["googlefcPresent"]) {
  //     if (document.body) {
  //       const iframe = document.createElement("iframe");
  //       iframe.style =
  //         "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";
  //       iframe.style.display = "none";
  //       iframe.name = "googlefcPresent";
  //       document.body.appendChild(iframe);
  //     } else {
  //       setTimeout(signalGooglefcPresent, 0);
  //     }
  //   }
  // }
  // signalGooglefcPresent();

  return (
    <html lang={locale}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1865112126139577"
          crossOrigin="anonymous"
        ></script>
        {/* <Script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-1865112126139577?ers=1"
          nonce="xG4oh1laltQ6VweQICU80g"
        ></Script>
        <Script id="not-block-ads " nonce="xG4oh1laltQ6VweQICU80g">(function() {signalGooglefcPresent()})();</Script> */}
      </head>
      <body className="bg-cover bg-white dark:bg-gray-900">{children}</body>
    </html>
  );
};

export default LocaleLayout;
