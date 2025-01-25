import SvgSprite from "@components/general/svg-sprite";
import { StrictMode } from "react";
import "@styles/global.scss";

// export metadata
export * from "./metadata";

interface Props {
  children: React.ReactNode;
}

export const dynamic = "force-dynamic";

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
