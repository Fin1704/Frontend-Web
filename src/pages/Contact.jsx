import * as React from 'react';
import 'animate.css';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import MapIcon from '@mui/icons-material/Map';
function Contact() {
    return (
        <Box
            className="animate__animated animate__bounceIn"
            sx={{
                padding: "40px",
                width: "100%",
                height: "90vh",
                display: "flex",
                alignItems: "start",
                justifyContent: "end",
                flexDirection: "column",
            }}
        >
            <Stack direction="column" spacing={1}>
                <Typography variant="body2" sx={{ color: "white", fontWeight: "bold", fontSize: "17px" }}>
                    Contant us
                </Typography>
                <Divider sx={{ background: "white", width: "30%" }} />
                {/* Email */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <EmailIcon sx={{ fontSize: 30, color: "white" }} />
                    <Box>
                        <Typography variant="h7" sx={{ color: "white", fontWeight: "bold",fontSize: "15px"  }}>
                            Email
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "white" }}>
                            xxx@gmail.com
                        </Typography>
                    </Box>
                </Stack>

                {/* Facebook */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <MapIcon sx={{ fontSize: 30, color: "white" }} />
                    <Box>
                        <Typography variant="h7" sx={{ color: "white", fontWeight: "bold",fontSize: "15px"  }}>
                            Local Address
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "white" }}>
                            Harju maakond, Tallinn, Lasnamäe linnaosa, Väike-Paala tn 1, 11415
                        </Typography>
                    </Box>
                </Stack>
                <Divider sx={{ background: "white", width: "30%" }} />
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src="https://galaxy4games.com/wp-content/themes/galaxy/img/contact_social_facebook.svg"
                        sx={{ width: 30, height: 30 }}
                    /><Avatar
                        src="https://galaxy4games.com/wp-content/themes/galaxy/img/contact_social_linkedin.svg"
                        sx={{ width: 30, height: 30 }}
                    /></Stack>
            </Stack>
        </Box>
    );
}

export default Contact;
