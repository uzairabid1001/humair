import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';

function Feedback(){
    return<> 
    <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    <h1>Starred</h1>
       <Typography paragraph>
       <img height="100%" width="100%" src="https://starred.com/wp-content/uploads/2020/04/featured_logo.png" alt="" />
        </Typography>
    </Box>
    </>
}
export default Feedback;