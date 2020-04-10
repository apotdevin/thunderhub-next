import App from 'next/app';
import React from 'react';
import { ContextProvider } from '../context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import { useSettings } from '../context/SettingsContext';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GlobalStyles } from '../styles/GlobalStyle';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import '../styles/FontStyles.css';

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

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ContextProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ContextProvider>
    );
  }
}
