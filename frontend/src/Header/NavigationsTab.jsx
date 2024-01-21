import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavigationTabs() {
  return (
    <div role="presentation" onClick={handleClick} style={{marginLeft:'50px', marginBottom:'50px'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/customerRegistration"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Customer Registeration
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/customerLogin"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Customer Login
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/agentLogin"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Agent Login
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/agentRegistration"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Agent Registration
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/chargerRegistration"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Charger Registration
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/mapView"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Map View
        </Link>
        <Link
          component="button" // You can use 'button' as a component to avoid anchor styling
          underline="none"    // To remove the underline
          style={{ color: '#048320' }}  // To set the color to grey
          to="/success"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Main Page
        </Link>
      </Breadcrumbs>
    </div>
  );
}
