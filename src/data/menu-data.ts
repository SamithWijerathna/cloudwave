import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About us',
    link: '/about-us'
  },
  {
    id: 2,
    title: 'Team',
    link: '/team'
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-random'
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-modern'
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact'
  }
];



export default menu_data;

// mobile menus (kept for backward compatibility but simplified)
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
}[] = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Pages', link: '/about-us' },
  { id: 3, title: 'Portfolio', link: '/portfolio-standard' },
  { id: 4, title: 'Blog', link: '/blog-modern' },
  { id: 5, title: 'Contact', link: '/contact' }
]