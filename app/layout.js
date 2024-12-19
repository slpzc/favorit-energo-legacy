import { Navigation } from "@/src/components/navigation";
import { keywords } from "./metakeywords";
import "./globals.css";
import { Footer } from "@/src/components/footer";
import { ProductsProvider } from "@/src/shared/products/context";

export const metadata = {
  title: "Фаворит Энерго",
  description:
    "ООО «Фаворит Энерго» — специализированное предприятие по продаже, аренде, обслуживанию и ремонту компрессоров, дизель-генераторов, экскаваторов-погрузчиков, сварочных агрегатов, систем подготовки сжатого воздуха и систем внедрения энергетических проектов.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta name="keywords" content={keywords.join(" ")} />
      <body>
        <ProductsProvider>
          <Navigation />
          {children}
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
