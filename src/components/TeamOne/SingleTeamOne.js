import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useFetch } from "../../hooks/useSWR";
import { social } from "@/data/NavItems";

const cards = [1, 2, 3];


export default function Album() {
          // SWR call for all permissions
          const { GetTeams } = useFetch();
          const { data: teams } = GetTeams();
          
  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {teams?.map((team) => (
              <Grid item key={team.team_id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                     image={team.team_image}
                  />
                  <div className="team-one__content">
                      <h2 className=''>{team.team_names}</h2>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}