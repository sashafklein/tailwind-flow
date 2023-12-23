# How this works

When you explicitly run `build:tw`, it:

1. Uses PostCSS to read all files in `tailwind/components` -- using the `tailwind/base.config.ts` file to determine how to read the `@apply` directives in them -- and copies them into `dist/components`.
2. Concatenates all independent compiled `dist/components/*.css` files into to `dist/components.css`.
3. Uses `prejss-cli` to read `dist/components.css` and turn it into the object format that Tailwind expects in its plugins, exporting that object from `dist/components.js`.
4. Imports that object (from `dist`) into `tailwind.config.ts`, along with the base config, and adds that object as a   `components` plugin. We could also use a similar pattern to add utilities, etc.

But the upshot is that you can write your component styles in CSS (SCSS, really), using Tailwind `@apply` directives, and they can be converted into Tailwind plugins, which gives you intellisense, etc.
