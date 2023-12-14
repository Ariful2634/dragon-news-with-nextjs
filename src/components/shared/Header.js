import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeadingImage from "@/assets/The Dragon News.png"
import moment from 'moment';

const Header = () => {

    const timestamp = moment()
    const time = timestamp.format('MMMM Do YYYY, h:mm:ss a');

    return (
        <Box className="w-full my-6">
            <Container>
                <Image src={HeadingImage} width={500} height={500} alt="logo" className="mx-auto" />
                <Typography variant="body2" color="gray" textAlign='center' className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography  textAlign="center">
                    {time}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;