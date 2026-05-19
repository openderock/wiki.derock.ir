// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'ویکی‌دراک',
      description: 'آموزش‌ها، راهنماها و مستندات فنی کارگاه فناوری دراک',
      favicon: '/favicon.png',
      customCss: ['./src/styles/wiki-rtl.css'],
      lastUpdated: true,
      logo: {
        src: './src/assets/img/logo-40.png', // مسیر لوگو
        alt: 'لوگو کارگاه فنّاوری دراک',
      },
      social: [
        {
          icon: 'codeberg',
          label: 'کارگاه فنّاوری دِراک',
          href: 'https://derock.ir',
        },
        {
          icon: 'gitlab',
          label: 'همگیت همروش',
          href: 'https://hamgit.ir/derock.ir/wiki',
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
              label: 'آردوینو',
              // collapsed: true,
              items: [
                {
                  label:"آردوینو چیست؟",
                  link: 'platforms/arduino',
                },
                {
                  label: 'مدل‌ها',
                  items: [
                    { autogenerate: { directory: 'platforms/arduino/boards' } },
                  ],
                },
                {
                  label: 'راهنماها',
                  items: [
                    {
                      autogenerate: {
                        directory: 'platforms/arduino/tutorials',
                      },
                    },
                  ],
                },
                {
                  label: 'پروژه‌ها',
                  items: [
                    {
                      autogenerate: {
                        directory: 'platforms/arduino/libraries',
                      },
                    },
                  ],
                },
                {
                  label: 'شیلد‌ها',
                  items: [
                    {
                      autogenerate: { directory: 'platforms/arduino/shields' },
                    },
                  ],
                },
              ],
            },

            {
              label: ' برد های اسپرسیف',
              items: [
                // {
                //   autogenerate: {
                //     directory: 'platforms/espressif',
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

        {
          label: 'پروژه ها',
          items: [{ autogenerate: { directory: 'projects' } }],
        },
      ],
    }),
  ],
});
