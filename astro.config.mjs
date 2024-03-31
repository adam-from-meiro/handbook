import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Meiro Handbook',
			social: {
				facebook: 'https://www.facebook.com/meiro.cdp/',
				twitter: 'https://twitter.com/meiro_io',
				instagram: 'https://www.instagram.com/meiro_io/',
				linkedin: 'https://www.linkedin.com/company/meirocdp',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started Guide', link: '/guides/getting-started/' },
						{ label: 'Benefits and Perks', link: '/guides/benefits-and-perks/' },
						{ label: 'How We Work', link: '/guides/how-we-work/' },
						{ label: 'Important Meetings', link: '/guides/our-rituals/' },
						{ label: 'Conflict of Interest', link: '/guides/moonlightning/' },
						{ label: 'Code of Conduct', link: '/guides/moonlightning/' },
						{ label: 'Career Journey', link: '/guides/making-a-career/' },
					],
				},
				{
					label: 'Career',
					items: [
						{ label: 'Developers Ladder', link: '/guides/titles-for-programmers/' },
						{ label: 'QA Engineer Ladder', link: '/guides/titles-for-qa/' },


						
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
