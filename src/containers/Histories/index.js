import React from "react";

import { ContentSize } from "../../core";
import { HistoriesContainer } from "./styles";
import {
  MemberBox,
  MemberImage,
  MemberName,
  MemberText
} from "../AboutUs/styles";

const Histories = () => (
  <HistoriesContainer>
    <ContentSize
      css={`
        display: flex;
        justify-content: center;
      `}
    >
      <MemberBox>
        <MemberImage src="https://uinames.com/api/photos/male/10.jpg" alt="" />
        <MemberName>Jason Powell</MemberName>
        <MemberText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
          a elit lacinia elementum. Donec in risus id turpis laoreet commodo.
          Vestibulum vestibulum placerat pulvinar. Phasellus luctus posuere
          justo, non mattis eros consequat sit amet. Cras venenatis, mi id
          dapibus pulvinar, neque odio rhoncus ipsum, eu lacinia quam neque nec
          ipsum. In luctus ex augue, eget vehicula erat maximus et. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </MemberText>
      </MemberBox>
    </ContentSize>
  </HistoriesContainer>
);

export default Histories;
