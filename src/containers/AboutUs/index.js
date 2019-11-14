import React from "react";

import { ContentSize } from "../../core";
import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsTitle,
  AboutUsDescription,
  TeamContainer,
  MemberBox,
  MemberImage,
  MemberName,
  MemberText
} from "./styles";

const AboutUs = () => (
  <AboutUsContainer>
    <ContentSize
      css={`
        flex-direction: column;
        padding: 0 1rem;
      `}
    >
      <AboutUsContent>
        <AboutUsTitle>Nuestra Mision</AboutUsTitle>
        <AboutUsDescription>
          To provide the most actionable app store data.
        </AboutUsDescription>
        <AboutUsTitle>Sobre Nosotros</AboutUsTitle>
        <AboutUsDescription>
          At Apptopia, we all come to work every day because we want to solve
          the biggest problem in mobile. Everyone is guessing. Publishers don’t
          know what apps to build, how to monetize them, or even what to price
          them at. Advertisers & brands don’t know where their target users are,
          how to reach them, or even how much they need to spend in order to do
          so. Investors aren’t sure which apps and genres are growing the
          quickest, and where users are really spending their time (and money).
        </AboutUsDescription>
        <AboutUsDescription>
          Throughout the history of business, people use data to make more
          informed decisions. Our mission at Apptopia is to make the app economy
          more transparent. Today we provide the most actionable mobile app data
          & insights in the industry. We want to make this data available to as
          many people as possible (not just the top 5%).
        </AboutUsDescription>
      </AboutUsContent>
      <AboutUsContent>
        <AboutUsTitle>Nuestro Equipo</AboutUsTitle>
        <TeamContainer>
          <MemberBox>
            <MemberImage
              src="https://uinames.com/api/photos/male/20.jpg"
              alt=""
            />
            <MemberName>Ronald Nichols</MemberName>
            <MemberText
              css={`
                font-size: 0.8rem;
                margin: 0;
              `}
            >
              CO-FOUNDER & CEO
            </MemberText>
            <MemberText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              posuere a elit lacinia elementum. Donec in risus id turpis laoreet
              commodo. Vestibulum vestibulum placerat pulvinar. Phasellus luctus
              posuere justo, non mattis eros consequat sit amet. Cras venenatis,
              mi id dapibus pulvinar, neque odio rhoncus ipsum, eu lacinia quam
              neque nec ipsum. In luctus ex augue, eget vehicula erat maximus
              et. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </MemberText>
          </MemberBox>
          <MemberBox>
            <MemberImage
              src="https://uinames.com/api/photos/male/20.jpg"
              alt=""
            />
            <MemberName>Ronald Nichols</MemberName>
            <MemberText
              css={`
                font-size: 0.8rem;
                margin: 0;
              `}
            >
              CO-FOUNDER & CEO
            </MemberText>
            <MemberText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              posuere a elit lacinia elementum. Donec in risus id turpis laoreet
              commodo. Vestibulum vestibulum placerat pulvinar. Phasellus luctus
              posuere justo, non mattis eros consequat sit amet. Cras venenatis,
              mi id dapibus pulvinar, neque odio rhoncus ipsum, eu lacinia quam
              neque nec ipsum. In luctus ex augue, eget vehicula erat maximus
              et. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </MemberText>
          </MemberBox>
          <MemberBox>
            <MemberImage
              src="https://uinames.com/api/photos/male/20.jpg"
              alt=""
            />
            <MemberName>Ronald Nichols</MemberName>
            <MemberText
              css={`
                font-size: 0.8rem;
                margin: 0;
              `}
            >
              CO-FOUNDER & CEO
            </MemberText>
            <MemberText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              posuere a elit lacinia elementum. Donec in risus id turpis laoreet
              commodo. Vestibulum vestibulum placerat pulvinar. Phasellus luctus
              posuere justo, non mattis eros consequat sit amet. Cras venenatis,
              mi id dapibus pulvinar, neque odio rhoncus ipsum, eu lacinia quam
              neque nec ipsum. In luctus ex augue, eget vehicula erat maximus
              et. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </MemberText>
          </MemberBox>
        </TeamContainer>
      </AboutUsContent>
    </ContentSize>
  </AboutUsContainer>
);

export default AboutUs;
