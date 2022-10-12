import { Link, Route, Routes } from "react-router-dom";
import Feedback from "./Dashboardscreen/Feedback";
import Message from "./Dashboardscreen/Message";
import Notification from "./Dashboardscreen/Notification";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Inbox from "./Dashboardscreen/Inbox";

const drawerWidth = 240;


function Dashboard(){
    return<>

    
      <Box sx={{ display: 'flex' }}>
      
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
          Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,    
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       
        <img height="7.3%" width="80%" src="https://www.getmailbird.com/setup/assets/imgs/logos/gmail.com.webp" alt="" />
        <Divider />
        
        <List>
          {[<Link to="/">Inbox</Link>, <Link to="Feedback">Starred</Link>,<Link to="Notification">Send email</Link>, <Link to="Inbox">Drafts</Link>,].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
      >
      <Routes>
        <Route path="/" element={<Message/>}/>
        <Route path="Inbox" element={<Inbox/>}/>
        <Route path="Feedback" element={<Feedback/>}/>
        <Route path="Notification" element={<Notification/>}/>
        </Routes>
        
        
      </Box>
    </Box>
    
 
    </>
}
export default Dashboard;