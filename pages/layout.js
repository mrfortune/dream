import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import SimpleBottomNavigation from '../components/bottom';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <FooterNav />
      <SimpleBottomNavigation/>
    </>
  )
  }
  