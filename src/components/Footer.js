import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Shakil Ops</h1>
          <PText>
            I wanna utilize my preexisting skills in software engineering,
            database management, business intelligence, software quality
            assurance and gain experience of working as part of a team.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8801782287887',
                path: 'tel:+8801782287887',
              },
              {
                title: 'shakildo.7887@gmail.com',
                path: 'mailto:shakildo.7887@gmail.com',
              },
              {
                title: 'Bashundhara, Dhaka, Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/ShakilOps',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/shakilops/',
              },
              {
                title: 'Medium',
                path: 'https://medium.com/@shakildo.7887',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/shakil.ops.52/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/ShakilOps',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/shakilops/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Shakil Ops | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="#">
              Shakil Ops
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
