import React from 'react';
import style from './layouts.module.css';
import Header from '../header/Header';
import Container from '@material-ui/core/Container';

const MainLayouts: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md" className={style.container}>
        <>{children}</>
      </Container>
    </>
  );
};

export default MainLayouts;
