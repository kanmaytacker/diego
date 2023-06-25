import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let gurufaRef = useRef();
  let gamesRef = useRef();
  let kidsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(gurufaRef)} to={'#gurufa'}>
            Gurufa
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(kidsRef)} to={'#kids'}>
            Gurufa Kids
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(gamesRef)}
            to={'#games'}
          >
            Gurufa Games
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={gurufaRef}>
            <p>
              Gurufa is on a mission to revolutionize education from first
              principles, fostering a new approach that empowers children to
              thrive in a rapidly changing world.
              
              <br />
              <br />
              With a commitment to holistic development and practical learning experiences, Gurufa offers two
              innovative platforms: Gurufa Kids and Gurufa Games.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/banner1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Gurufa Kids</h3>
            <div ref={kidsRef}>
              <p>
                Gurufa Kids is a platform dedicated to providing children aged
                5-16 with a comprehensive range of extra-curricular courses. We
                understand the challenges faced by parents who seek to cultivate
                their child's overall growth, both physically and cognitively.
                That's why we have carefully curated a diverse selection of
                courses, including Rubik's Cube, Vedic Maths, Abacus and Yoga.
                We are already working on other skills like Aptitude,
                Fundamentals of Coding, Basics of Finance, Football, Skating,
                and many more. These courses are designed to inspire curiosity,
                foster creativity, and nurture a love for learning in children.
              </p>
              <h4>How We Make a Difference?</h4>
              <ol>
                <li>
                  <em>Holistic Development</em>: Traditional education systems
                  often overlook the holistic development of children, focusing
                  solely on academics. Gurufa Kids addresses this challenge by
                  offering a wide range of courses that cater to various
                  interests and talents. Through our platform, parents can
                  provide their children with opportunities to explore diverse
                  fields and develop well-rounded skills.
                </li>
                <li>
                  <em>Engaging Learning Experience</em>: We understand the
                  importance of active engagement in the learning process.
                  Gurufa Kids courses are designed to provide interactive and
                  experiential learning experiences. By engaging in practical
                  activities and hands-on projects, children can apply their
                  knowledge and develop critical thinking, problem-solving, and
                  collaboration skills
                </li>
              </ol>
            </div>
            <h3>Gurufa Games</h3>
            <div id={'#sustainability'} ref={gamesRef}>
              <p>
                Gurufa Games is a platform where children, or their parents on
                their behalf, can enroll as participants in a series of exciting
                and educational competitions. Our competitions aim to provide a
                consistent and fair stream of opportunities for children to
                showcase their talents, gauge their growth, and discover their
                true passions and interests.
              </p>
              <h4>How We Make a Difference?</h4>
              <ol>
                <li>
                  <em>Practical Application of Skills</em>: The conventional
                  examination-based evaluation methods often fail to capture a
                  child's true potential and practical skills. Gurufa Games
                  offers a unique solution by organizing regular competitions
                  where children can put their knowledge and abilities into
                  practice. These competitions allow them to demonstrate their
                  skills in a practical setting, fostering confidence and
                  encouraging further exploration.
                </li>
                <li>
                  <em>Inclusive Education</em>: Our goal is to democratize
                  education and create an inclusive learning environment. Gurufa
                  Games provides equal opportunities for all participants,
                  irrespective of their background or academic performance. By
                  focusing on practical skills and talent, we empower children
                  to discover their unique strengths and passions.
                </li>
              </ol>
              <p>
                At Gurufa, we believe in the power of education to transform
                lives. By building an ecosystem of learning and competing
                opportunities with Gurufa Kids and Gurufa Games, we strive to
                provide a holistic, practical, and engaging educational
                experience that nurtures each child's full potential.
                <br />
                <br />
                Join us on
                this exciting journey of education reform and empower your child
                to succeed in a dynamic and ever-evolving world!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;
