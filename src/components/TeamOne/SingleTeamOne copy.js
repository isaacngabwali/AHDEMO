import { social } from "@/data/NavItems";
import React from "react";
import { Col, Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const SingleTeamOne = ({ team = {} }) => {
  const { image, name, title, description } = team;  
  // SWR call for all permissions
  const { GetTeams } = useFetch();
  const { data: teams } = GetTeams();

  console.log("index - response", teams);

  return (
    <Col xl={4} lg={4}>
    {teams?.map((team) => (
      <div className="team-one__single" key={team.team_id}>
        <div className="team-one__img-box">
          <div className="team-one__img">
            <Image src={team.team_image} alt="" />
          </div>
          <div className="team-one__member-name">
            <h2>{team.team_names}</h2>
          </div>
          </div>
          <div className="team-one__content">
            <h4 className="team-one__member-title">{team.team_title}</h4>
            <p className="team-one__text-box">{team.team_bio}</p>
          </div>
          <div className="team-one__social">
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index}>
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
          </div>
      </div>
    ))}

    </Col>
  );
};

export default SingleTeamOne;
