import base from "./tailwind/base.config";
import customComponents from "./dist/components";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const componentPlugin = plugin(function ({ addComponents }) {
  addComponents(customComponents);
});

export default {
  ...base,
  plugins: [...base.plugins, componentPlugin],
} satisfies Config;
