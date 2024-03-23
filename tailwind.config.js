/** @type {import('tailwindcss').Config} */
export default {
  content: ["./.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        green: {
          css: {
            // "--tw-prose-invert-body": theme("colors.green[200]"),
            "--tw-prose-invert-headings": "#eee",
            // "--tw-prose-invert-lead": theme("colors.green[300]"),
            // "--tw-prose-invert-links": theme("colors.white"),
            // "--tw-prose-invert-bold": theme("colors.white"),
            // "--tw-prose-invert-counters": theme("colors.green[400]"),
            // "--tw-prose-invert-bullets": theme("colors.green[600]"),
            // "--tw-prose-invert-hr": theme("colors.green[700]"),
            // "--tw-prose-invert-quotes": theme("colors.green[100]"),
            // "--tw-prose-invert-quote-borders": theme("colors.green[700]"),
            // "--tw-prose-invert-captions": theme("colors.green[400]"),
            // "--tw-prose-invert-code": theme("colors.white"),
            // "--tw-prose-invert-pre-code": theme("colors.green[300]"),
            // "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            // "--tw-prose-invert-th-borders": theme("colors.green[600]"),
            // "--tw-prose-invert-td-borders": theme("colors.green[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
