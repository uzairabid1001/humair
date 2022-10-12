import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';

function Notification(){
    return<>
     <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    <h1>Send email</h1>
       <Typography paragraph>
       <img height="100%" width="100%" src="https://optinmonster.com/wp-content/uploads/2016/09/13-Types-of-Emails-You-Need-to-Be-Sending-Your-Email-List-620x294.png" alt="" />
       
        </Typography>
        </Box>
    </>
}
export default Notification;