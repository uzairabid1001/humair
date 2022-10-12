import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
function Inbox(){
    return<>
     <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    <h1>Drafts</h1>
   
    <img height="40%" width="80%" src="https://previews.123rf.com/images/outchill/outchill1801/outchill180101893/92803233-draft-black-text-round-stamp-with-zig-zag-border-and-vintage-texture-.jpg" alt="" />
       
        </Box>
    </>
}
export default Inbox;