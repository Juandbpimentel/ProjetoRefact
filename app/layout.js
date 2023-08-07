export const metadata = {
  title: "Site de teste",
  description: "esse é um site de teste",
};
import "@/styles/globals.css";

const RootLayout = (props) => (
  <html lang="pt-BR">
    <body>{props.children}</body>
  </html>
);
export default RootLayout;
