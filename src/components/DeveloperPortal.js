import React from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography, Card, Button } from "@mui/material";
import developerimage from "../images/API developer portal.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/DeveloperPortal.module.scss";

const DeveloperPortal = () => {
  const carouselItems = [
    {
      title: "Authentication & Registration",
      description:
        "Secure authentication process with advanced identity and access management.",
      bgColor: "#DFF6FF",
    },
    {
      title: "Configuration",
      description:
        "Learn how to run custom jobs to process transaction objects. Clearingworks offers a Configuration Service for managing system settings through automated jobs.",
      bgColor: "#F0F8FF",
    },
    {
      title: "Get Customer Account",
      description:
        "Use account to interact with customer account and invoice data through Clearingworks.",
      bgColor: "#E6E6FA",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={styles.leftSection}>
          <Typography variant="h4" className={styles.head}>
            Welcome Developers!
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: "40px" }}
            className={styles.title}
          >
            Developer Portal
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Payment, Lockbox and Treasury Solutions
          </Typography>

          <div className={styles.section}>
            <Typography variant="h5" className={styles.subheading}>
              Start Here
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  className={styles.smallButton}
                  sx={{
                    backgroundColor: "rgb(58, 150, 58)",
                    "&:hover": { backgroundColor: "rgb(50, 130, 50)" },
                  }}
                >
                  <span>Create Your Account</span>
                  <ArrowForwardIcon />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  className={styles.smallButton}
                  sx={{
                    backgroundColor: "rgb(58, 150, 58)",
                    "&:hover": { backgroundColor: "rgb(50, 130, 50)" },
                  }}
                >
                  <span>Developer Guide</span>
                  <ArrowForwardIcon />
                </Button>
              </Grid>
            </Grid>
          </div>

          <div className={styles.section}>
            <Typography variant="h5" className={styles.subheading}>
              Directly to API
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  className={styles.smallButton}
                  sx={{
                    backgroundColor: "rgb(58, 150, 58)",
                    "&:hover": { backgroundColor: "rgb(50, 130, 50)" },
                  }}
                >
                  <span>View Documentation</span>
                  <ArrowForwardIcon />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  className={styles.smallButton}
                  sx={{
                    backgroundColor: "rgb(58, 150, 58)",
                    "&:hover": { backgroundColor: "rgb(50, 130, 50)" },
                  }}
                >
                  <span>Download Postman Collection</span>
                  <ArrowForwardIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={6} className={styles.imageContainer}>
          <img
            src={developerimage}
            alt="Developer Image"
            className={styles.image}
          />
        </Grid>
      </Grid>

      <div className={styles.hr}>
        <div className={styles.hrLine}></div>
    </div>

      <div className={styles.sectionContent}>
        <Typography variant="h5" className={styles.sectionText}>
          Financial Institutions and business need a partner with the
          technology, talent, and imagination to provide solutions across the
          payments spectrum. From processing paper checks, which are still a
          mainstay of the payment ecosystem, to providing software and APIs,
          CheckAlt manages complex payment flows - so you can focus on what
          matters.
        </Typography>
      </div>

      <div className="row">
        <div className="col-3">
          <Typography variant="h5" className={styles.subheading}>
            Use Cases
          </Typography>
          <Button
            variant="contained"
            className={styles.smallButton}
            sx={{
              backgroundColor: "rgb(58, 150, 58)",
              "&:hover": { backgroundColor: "rgb(50, 130, 50)" },
            }}
          >
            Explore the possibilities
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </div>
        <div className="col-9">
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <Card
                  style={{ backgroundColor: "#F3F3F3" }}
                  className={styles.card}
                >
                  <div className={styles.cardContent}>
                    <Typography variant="h6" className={styles.cardTitle}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={styles.cardSubtitle}
                    >
                      Card subtitle
                    </Typography>
                    <Typography variant="body2" className={styles.cardText}>
                      {item.description}
                    </Typography>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortal;
