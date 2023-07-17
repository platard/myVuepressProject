import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        logo: 'images/iconmonstr-layer-multiple-alt-filled.svg',
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Guide',
            link: '/guide/',
            },
            {
                text: 'About',
                link: '/about.md',
            }

        ],
    }),
}