import React from 'react';
import { Container, Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaCheck } from 'react-icons/fa';

const details = [
  {
    img: "/assets/img/details-1.png",
    title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Iure at voluptas aspernatur dignissimos doloribus repudiandae.",
      "Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium."
    ],
    extra: "Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia",
    imgFirst: true
  },
  {
    img: "/assets/img/details-2.png",
    title: "Corporis temporibus maiores provident",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    extra: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.",
    imgFirst: false
  },
  {
    img: "/assets/img/details-3.png",
    title: "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas",
    description: "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat."
    ],
    extra: "Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est. Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.",
    imgFirst: true
  },
  {
    img: "/assets/img/details-4.png",
    title: "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    extra: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    points: [
      "Et praesentium laboriosam architecto nam.",
      "Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.",
      "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat."
    ],
    imgFirst: false
  }
];

const Details = () => {
  return (
    <section id="details" className="details">
      <Container>
        {details.map((detail, index) => (
          <Grid container spacing={3} className="content" key={index} flexDirection={detail.imgFirst ? 'row' : 'row-reverse'}>
            <Grid item md={4} data-aos={detail.imgFirst ? 'fade-right' : 'fade-left'}>
              <img src={detail.img} style={{ maxWidth: '100%', height: 'auto' }} alt="" />
            </Grid>
            <Grid item md={8} pt={4} data-aos="fade-up">
              <Typography variant="h3" component="h3">{detail.title}</Typography>
              <Typography variant="body1" component="p" fontStyle="italic">
                {detail.description}
              </Typography>
              {detail.points && (
                <List>
                  {detail.points.map((point, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <FaCheck />
                      </ListItemIcon>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>
              )}
              <Typography variant="body1" component="p">
                {detail.extra}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </section>
  );
};

export default Details;
