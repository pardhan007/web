import ranks from "@/assets/data/ranks/ranks_2";
import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";

const LeaderboardX = () => {
  return (
    <Container className={"mb-44"} style={{ marginTop: "100px" }}>
      <center>
        <h2 className="text-2xl font-bold text-center mb-5" id="standing">
          Top ranks in recent contests
        </h2>
      </center>
      <hr />
      <div className="text-center mb-8 my-4">
        {ranks.map((item, i) => (
          <Reveal
            key={item.Rank}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (i + 1)}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              }}
            >
              <div
                style={{
                  padding: "0.2rem",
                  gridColumn: "span 1",
                }}
              >
                {item.Rank === "Rank" ? (
                  <b>{item.Team}</b>
                ) : (
                  <div>{item.Team}</div>
                )}
              </div>
              <div
                style={{
                  padding: "0.2rem",
                  gridColumn: "span 1",
                }}
              >
                {item.Rank === "Rank" ? (
                  <b>{item.Rank}</b>
                ) : (
                  <div>{item.Rank}</div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default LeaderboardX;
