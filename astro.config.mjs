// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'دانشنامه کارگاه فنّاوری دِراک',
      customCss: ['./src/styles/wiki-rtl.css'],

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
        },
      },

      sidebar: [
        {
          label: 'خانه',
          items: [{ label: 'صفحه اصلی', slug: '' }],
        },

        {
          label: 'پلتفرم‌های سخت‌افزاری',
          items: [{ autogenerate: { directory: 'hardware-platforms' } }],
        },

        {
          label: 'مبانی الکترونیک',
          items: [{ autogenerate: { directory: 'electronics-fundamentals' } }],
        },

        {
          label: 'ماژول‌ها و قطعات',
          items: [{ autogenerate: { directory: 'components-modules' } }],
        },
      ],
    }),
  ],
});
