import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from "@unocss/preset-attributify";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  shortcuts: [{ header: "font-bold leading-snug md:leading-snug tracking-[0.01em] text-4xl md:text-6xl mb-6" }],
  presets: [
    presetUno(),
    presetAttributify({}),
    presetIcons({}),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: ['Onest'],
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
});
