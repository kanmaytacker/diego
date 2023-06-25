import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './support.module.css';

import Banner from '../components/Banner';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Policy from '../components/Policy';
import ThemeLink from '../components/ThemeLink';
import Terms from '../components/Terms';
import Contact from '../components/Contact';

const SupportPage = (props) => {
  const subpages = [
    { title: 'Terms & Conditions', key: 'terms' },
    { title: 'Privacy Policy', key: 'policy' },
    { title: 'Contact Us', key: 'contact' },
  ];

  const [current, setCurrent] = useState(subpages[0]);

  const renderElement = (key) => {
    let tempElement = <React.Fragment />;

    switch (key) {
      case 'policy':
        tempElement = <Policy />;
        break;
      case 'terms':
        tempElement = <Terms />;
        break;
      case 'contact':
        tempElement = <Contact />;
        break;
      default:
        break;
    }
    return tempElement;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash !== '' && props.location.hash !== undefined) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.filter((detail) => detail.key === hash)[0];
      if (tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo(0, 475);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={current.title}
          bgImage={'/banner1.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details, index) => {
            return (
              <ThemeLink
                onClick={(e) => {
                  navigate(`/support#${details.key}`);
                }}
                key={details.key}
                isActive={current.key === details.key}
                to={`/support#${details.key}`}
              >
                {details.title}
              </ThemeLink>
            );
          })}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => {
              return (
                <div
                  key={details.key}
                  className={`${styles.content} ${
                    current.key === details.key ? styles.show : styles.hide
                  }`}
                >
                  {renderElement(details.key)}
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
