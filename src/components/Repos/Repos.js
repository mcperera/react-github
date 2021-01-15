import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../../context/context";

import Bar3D from "../Charts/Bar3D";
import Pie3D from "../Charts/Pie3D";
import Doughnut2D from "../Charts/Doughnut2D";

function Repos() {
  const { repos } = useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      //if the property doesn't exsits in total[language]
      //total[language] = 1;
      total[language] = { label: language, value: 1 };
    } else {
      //total[language] = total[language] + 1;
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <ReposWrapper className="section-center">
        <Pie3D data={languages} />
      </ReposWrapper>
    </section>
  );
}

const ReposWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
