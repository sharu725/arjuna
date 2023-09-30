import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from "@unocss/preset-attributify";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  shortcuts: [{ header: "font-bold text-3xl mb-3" }],
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
