// import App from 'next/app';
import React, { Suspense, Children } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
// import theme from 'styled-theming';
// import { ContextProvider } from '../context/ContextProvider';
import { useSettings } from '../src/context/SettingsContext';
import { useAccount } from '../src/context/AccountContext';

import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GlobalStyles } from '../src/styles/GlobalStyle';
// import { ScrollToTop } from '../components/scrollToTop/ScrollToTop';
import { Header } from '../src/layouts/header/Header';
import { Footer } from '../src/layouts/footer/Footer';
import { LoadingCard } from '../src/components/loading/LoadingCard';
import EntryView from '../views/entry/Entry';
import { SessionLogin } from '../views/entry/login/SessionLogin';
import { ConnectionCheck } from '../src/components/connectionCheck/ConnectionCheck';
import { StatusCheck } from '../src/components/statusCheck/StatusCheck';
import { mediaWidths } from '../src/styles/Themes';
import { Section } from '../src/components/section/Section';
import { Navigation } from '../src/layouts/navigation/Navigation';
import { GridWrapper } from '../src/components/gridWrapper/GridWrapper';
import { HomeView } from '../views/home/HomeView';

// const EntryView = React.lazy(() => import('../views/entry/Entry'));

const ContextApp: React.FC = () => {
    // const { theme } = useSettings();
    const { loggedIn, admin, viewOnly, sessionAdmin } = useAccount();

    // console.log('Initial user:', { loggedIn, admin, viewOnly, sessionAdmin });

    // const renderContent = () => (

    // if (!loggedIn && admin === '') {
    //     return <EntryView/>
    // } else

    return !loggedIn && admin === '' ? (
        <EntryView />
    ) : admin !== '' && viewOnly === '' && sessionAdmin === '' ? (
        <SessionLogin />
    ) : (
        <GridWrapper>
            <ConnectionCheck />
            <StatusCheck />
            <HomeView />
        </GridWrapper>
    );

    // return (
    // <Suspense fallback={<LoadingCard noCard={true} loadingHeight={'240px'} />}>
    // <EntryView />
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
    // );

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
