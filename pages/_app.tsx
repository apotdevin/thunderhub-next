import App from 'next/app';
import React from 'react';
import { ContextProvider } from '../src/context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import { useSettings } from '../src/context/SettingsContext';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GlobalStyles } from '../styles/GlobalStyle';
import { Header } from '../src/layouts/header/Header';
import { Footer } from '../src/layouts/footer/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import '../styles/FontStyles.css';

import withData from '../config/apolloClient';

const Wrapper: React.FC = ({ children }) => {
    const { theme } = useSettings();

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <ModalProvider backgroundComponent={BaseModalBackground}>
                <GlobalStyles />
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

export default withData(MyApp);
