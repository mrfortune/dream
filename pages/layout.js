import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import SimpleBottomNavigation from '../components/bottom';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export default function Layout({ children }) {
  return (
    <>
      <AppBar/>
      <main className={roboto.className}>{children}</main>
      <FooterNav />
      <SimpleBottomNavigation/>
    </>
  )
  }
  