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

const cards = [1, 2, 3];


export default function Album() {
          // SWR call for all permissions
          const { GetGallery } = useFetch();
          const { data: gallery } = GetGallery();
          console.log("gallery page", gallery);
          
  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {gallery?.map((gallery) => (
              <Grid item key={gallery.gallery_id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                     image={gallery.gallery_image}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}