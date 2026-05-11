// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'دانشنامه فنّاوری دِراک',
      customCss: ['./src/styles/wiki-rtl.css'],
      logo: {
        src: './src/assets/img/logo-40.png', // مسیر لوگو
        alt: 'لوگو کارگاه فنّاوری دراک',
      },

      social: [
        {
          icon: 'gitlab',
          label: 'Chabokan Gitlab',
          href: 'https://gitlab.chabokan.net/derock.ir/wiki',
        },
      ],

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'فارسی',
          lang: 'fa-IR',
          dir: 'rtl',
        },
      },

      sidebar: [
        {
          label: 'مدخل',
          items: [{ label: '👋 راهنمای دانشنامه', slug: '' }],
        },

        // {
        //   label: 'مبانی الکترونیک',
        //   items: [{ autogenerate: { directory: 'electronics-fundamentals' } }],
        // },

        {
          label: 'برد های توسعه',
          collapsed: false,
          items: [
            {
              label: 'برد های آردوینو',
              items: [
                {
                  autogenerate: {
                    directory: 'hardware-platforms/arduino',
                  },
                },
              ],
            },

            {
              label: ' برد های اسپرسیف',
              items: [
                // {
                //   autogenerate: {
                //     directory: 'hardware-platforms/espressif',
                //   },
                // },
              ],
            },
          ],
        },

        // {
        //   label: 'ماژول‌ها و قطعات',
        //   items: [{ autogenerate: { directory: 'components-modules' } }],
        // },
      ],
    }),
  ],
});
