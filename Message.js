import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
function Message(){
    return<>
     <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    
    <h1>Inbox</h1>
       <Typography paragraph>
         <img height="100%" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2aJpRtt5V2_OlxKhgh0WM3CEmSOyIQThJA&usqp=CAU" alt="" />
        </Typography>
        
        </Box>
    </>
}
export default Message;