import SvgSprite from "@components/svg-sprite";
import { StrictMode } from "react";
import "@styles/global.scss";

// export metadata
export * from "./metadata";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl" prefix="og: https://ogp.me/ns#">
      <body>
        <StrictMode>
          {children}
          <SvgSprite />
        </StrictMode>
      </body>
    </html>
  );
}
