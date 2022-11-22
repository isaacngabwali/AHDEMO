import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ReactVisibilitySensor from "react-visibility-sensor";
import Container from '@mui/material/Container';
import React, { useState } from "react";
import { useFetch } from "../../hooks/useSWR";
import Link from "next/link";
import { Image } from "react-bootstrap";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album() {
  const [countStart, setCountStart] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  const raisedNumber = 0;
  const goalNumber = 50000;
  const percent = Math.round((raisedNumber / goalNumber) * 100);
          // SWR call for all permissions
          const { GetCauses } = useFetch();
          const { data: projects } = GetCauses();
          console.log("projects page", projects);
          
  return (
        <Container sx={{ py: 12 }} maxWidth="xl">
          <div className="">
          <Grid container spacing={2}>
            {projects?.map((projects) => (
              <Grid item key={projects.cause_id} xs={12} sm={6} md={4}>
                <Card>
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                <Image
                  src={projects.cause_image}
                  alt=""
                  height='250px'
                />
              </div>
              <div className="causes-one__category">
                <span>{projects.cause_catergory}</span>
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href="/causes-details">{projects.cause_title}</Link>
              </h3>
              <p className="causes-one__text">{readMore ? projects.cause_description : `${projects.cause_description.substring(0, 200)} ....`} 
              <button className="btn">Read More</button></p>
            </div>
            <div className="causes-one__progress">
                <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <div className="bar">
                  <div
                    className="bar-inner count-bar"
                    data-percent={`${countStart ? percent : 0}%`}
                    style={{ width: `${countStart ? percent : 0}%`, opacity: 1 }}
                  >
                    <div className="count-text" style={{ opacity: 1 }}>
                      {countStart ? percent : 0}%
                    </div>
                  </div>
                  <div className="causes-one__goals">
                <p>
                  <span>${projects.cause_raised}</span> Raised
                </p>
                <p>
                  <span>${projects.cause_goal}</span> Goal
                </p>
              </div>
                </div>
              </ReactVisibilitySensor>
            </div>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        </Container>
  );
}