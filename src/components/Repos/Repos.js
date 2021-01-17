import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../../context/context";

import Bar3D from "../Charts/Bar3D";
import Pie3D from "../Charts/Pie3D";
import Column2D from "../Charts/Column2D";
import Doughnut2D from "../Charts/Doughnut2D";

function Repos() {
  const { repos } = useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      //if the property doesn't exsits in total[language]
      //total[language] = 1;
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      //total[language] = total[language] + 1;
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  //Most used languages
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  //console.log("mostUsed ->", mostUsed);

  //Most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      if (item.stars !== 0) {
        return { label: item.label, value: item.stars };
      } else {
        return {};
      }
    })
    .filter((item) => Object.keys(item).length !== 0);
  //console.log("mostPopular ->", mostPopular);

  //Stars with Forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  //stars = Object.values(stars).slice(-5).reverse();
  stars = Object.values(stars).reverse().slice(0, 5);
  forks = Object.values(forks).reverse().slice(0, 5);

  //console.log({ stars, forks });

  return (
    <section className="section">
      <ReposWrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column2D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
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
