import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../../context/context";

import Bar3D from "../Charts/Bar3D";
import Pie3D from "../Charts/Pie3D";
import Doughnut2D from "../Charts/Doughnut2D";

function Repos() {
  const { repos } = useContext(GithubContext);
  return <Bar3D />;
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
