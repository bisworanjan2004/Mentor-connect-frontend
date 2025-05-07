// OurTeam.jsx
import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import TeamMemberCard from '../components/cards/TeamMemberCard';
import color from '../components/utils/Colors';



const teamMembers = [
    {
        name: 'Swadhin Pradhan',
        image: "",
        post: 'Senior Developer',
        description: 'Visionary leader guiding our team with expertise and innovation.',
        linkedIn: '',
        instagram: '',
        facebook: '',
        mail: 'swadhin@gmail.com',
    },
    {
        name: 'Bisworanjan Rout',
        image: "",
        post: 'Jr. Developer',
        description: 'Enthusiastic learner focused on growth and delivering quality work.',
        linkedIn: '',
        instagram: '',
        facebook: '',
        mail: '',
    },

    {
        name: 'Sriya Biswal',
        image: "",
        post: 'UI/UX Designer',
        description: 'Creative designer crafting user-centric, intuitive, and engaging interfaces.',
        linkedIn: '',
        instagram: '',
        facebook: '',
        mail: '',
    },
    {
        name: 'Jagat Jyoti Dash',
        image: 'url_to_eve_imag',
        post: 'Trainee',
        description: 'Motivated trainee keen on learning and improving skills quickly.',
        linkedIn: '',
        instagram: '',
        facebook: '',
        mail: '',
    }
];





const OurTeam = () => {
    return (
        <Container sx={{mb:10}}>

            <Typography variant="h4" gutterBottom sx={{ color: color.firstColor,marginTop:5, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>
                Our Team
            </Typography>


            <Grid container spacing={4} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <TeamMemberCard
                            name={member.name}
                            image={member.image}
                            post={member.post}
                            description={member.description}
                            linkedIn={member.linkedIn}
                            instagram={member.instagram}
                            facebook={member.facebook}
                            mail={member.mail}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default OurTeam;
