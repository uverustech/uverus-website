import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const graphikMedium = localFont({
    src: "./Graphik-Medium.otf",
    weight: "500",
  });

 export const sfProRegular = localFont({
    src: "./SF-Pro-Rounded-Regular.otf",
    weight: "400",
  });

  export const sfProSemibold = localFont({
    src: "./SF-Pro-Rounded-Semibold.otf",
    weight: "600",
  });

  export const sfProBold = localFont({
    src: "./SF-Pro-Rounded-Bold.otf",
    weight: "700",
  });

  export const inter = Inter({subsets: ['latin']});