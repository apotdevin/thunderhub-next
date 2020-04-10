// import App from 'next/app';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
// import theme from 'styled-theming';
// import { ContextProvider } from '../context/ContextProvider';
import { useSettings } from '../context/SettingsContext';
import { useAccount } from '../context/AccountContext';

import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GlobalStyles } from '../styles/GlobalStyle';
// import { ScrollToTop } from '../components/scrollToTop/ScrollToTop';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { LoadingCard } from '../components/loading/LoadingCard';
import EntryView from '../views/entry/Entry';

// const EntryView = React.lazy(() => import('../views/entry/Entry'));

const ContextApp: React.FC = () => {
  // const { theme } = useSettings();
  // const { loggedIn, admin, viewOnly, sessionAdmin } = useAccount();

  // console.log('Initial user:', { loggedIn, admin, viewOnly, sessionAdmin });

  // const renderContent = () => (
  return (
    // <Suspense fallback={<LoadingCard noCard={true} loadingHeight={'240px'} />}>
    <EntryView />
    // {/* {!loggedIn && admin === '' ? (
    //   <EntryView />
    // ) : admin !== '' && viewOnly === '' && sessionAdmin === '' ? (
    //   <EntryView session={true} />
    // ) : (
    //   <>
    //     <ConnectionCheck />
    //     <StatusCheck />
    //     <ContentView />
    //   </>
    // )} */}
    // </Suspense>
  );

  // return (
  //   <ThemeProvider theme={{ mode: theme }}>
  //     <ModalProvider backgroundComponent={BaseModalBackground}>
  //       {/* <ScrollToTop /> */}
  //       <GlobalStyles />
  //       <Header />
  //       {renderContent()}
  //       <Footer />
  //     </ModalProvider>
  //   </ThemeProvider>
  // );
};

export default ContextApp;
