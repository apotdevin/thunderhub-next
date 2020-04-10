import App from 'next/app';
import React from 'react';
import { ContextProvider } from '../src/context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import { useSettings } from '../src/context/SettingsContext';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { Header } from '../src/layouts/header/Header';
import { Footer } from '../src/layouts/footer/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import '../src/styles/FontStyles.css';

import withApollo from '../config/apolloClient';
import { useAccount } from '../src/context/AccountContext';
import { BitcoinFees } from '../src/components/bitcoinInfo/BitcoinFees';
import { BitcoinPrice } from '../src/components/bitcoinInfo/BitcoinPrice';

const Wrapper: React.FC = ({ children }) => {
    const { theme } = useSettings();
    const { loggedIn } = useAccount();

    const renderGetters = () => (
        <>
            <BitcoinPrice />
            <BitcoinFees />
        </>
    );

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <ModalProvider backgroundComponent={BaseModalBackground}>
                <GlobalStyles />
                {loggedIn && renderGetters()}
                <Header />
                {children}
                <Footer />
            </ModalProvider>
        </ThemeProvider>
    );
};

class MyApp extends App<any> {
    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <ContextProvider>
                    <Wrapper>
                        <Component {...pageProps} />
                    </Wrapper>
                </ContextProvider>
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);
