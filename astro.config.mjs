// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.derock.ir',
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: 'ویکی دراک',
      description: 'آموزش‌ها، راهنماها و مستندات فنی کارگاه فناوری دراک',

      favicon: '/favicon.png',
      customCss: ['./src/styles/wiki-rtl.css'],
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/derock-lab/wiki/edit/master/',
      },
      logo: {
        light: './src/assets/img/logo-light.png',
        dark: './src/assets/img/logo-dark.png',
        alt: 'لوگو کارگاه فنّاوری دراک',
      },
      social: [
        {
          icon: 'codeberg',
          label: 'کارگاه فنّاوری دِراک',
          href: 'https://derock.ir',
        },
        {
          icon: 'github',
          label: 'مخزن گیت هاب',
          href: 'https://github.com/derock-lab/wiki',
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
          label: 'خانه',
          items: [{ label: 'دانشنامه کارگاه فناوری دراک', slug: '' }],
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
                  label: 'آردوینو چیست؟',
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
              label: ' اسپرسیف',
              items: [
                {
                  label: 'آشنایی با ESP8266',
                  link: 'platforms/espressif/esp8266',
                },
                {
                  label: 'آشنایی با ESP32',
                  link: 'platforms/espressif/esp32',
                },
                {
                  label: 'مدل‌ها',
                  items: [
                    // { autogenerate: { directory: 'platforms/espressif/boards' } },
                  ],
                },
                {
                  label: 'راهنماها',
                  items: [
                    {
                      autogenerate: {
                        directory: 'platforms/espressif/tutorials',
                      },
                    },
                  ],
                },
                {
                  label: 'شیلد‌ها',
                  items: [
                    {
                      autogenerate: { directory: 'platforms/espressif/shields' },
                    },
                  ],
                },
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
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
