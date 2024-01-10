import { Roboto } from 'next/font/google';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

import 'styles/global.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`${roboto.className} bg-black`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
