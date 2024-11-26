import React from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    styled,
    Tooltip,
    Zoom,
} from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
        transform: "translateY(-10px)",
    },
}));

const CompanyIcon = styled(CardMedia)({
    width: "60px",
    height: "60px",
    margin: "0.25rem auto",
    borderRadius: "50%",
    border: "2px solid #1976d2",
    padding: "2px",
    backgroundSize: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "scale(1.1)",
    },
});

const PartnersInvestors = () => {
    const partners = [
        {
            name: "Tech Solutions Inc",
            icon: "images.unsplash.com/photo-1516321497487-e288fb19713f",
        },
        {
            name: "Global Innovations",
            icon: "images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        },
        {
            name: "Future Systems",
            icon: "images.unsplash.com/photo-1460925895917-afdab827c52f",
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
               position:"fixed",
                width: "100vw",
                bottom:"0"
                
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                   
                        {partners.map((partner) => (
                            <Grid
                                item
                               
                                key={partner.name}

                            >
                                <Zoom in={true} style={{ transitionDelay: "200ms" }}>
                                    <StyledCard>
                                        <CardContent sx={{ textAlign: "center", p: 0.5 }}>
                                            <Tooltip title="Partner" arrow placement="top">
                                                <CompanyIcon
                                                    component="img"
                                                    image={`https://${partner.icon}`}
                                                    alt={`${partner.name} icon`}
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d";
                                                    }}
                                                />
                                            </Tooltip>
                                        </CardContent>
                                    </StyledCard>
                                </Zoom>
                            </Grid>
                        ))}
                 
                </Box>
            </Container>
        </Box>
    );
};

export default PartnersInvestors;
