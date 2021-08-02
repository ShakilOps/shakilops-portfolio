import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and(max-width:768px) {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    margin-top: 5rem;
    gap: 5rem;
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what will i do for you" />
        <div className="services__allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok"
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="Web Dev"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok"
          />
          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
