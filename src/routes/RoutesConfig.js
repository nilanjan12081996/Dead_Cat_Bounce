import React from 'react';
const Login = React.lazy(() => import('../pages/Auth/Login/Login'));
import InsideLayout from "../ui/layout/InsideLayout";
import OutsideLayout from "../ui/layout/OutsideLayout";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword.jsx";
// import OfferRequest from '../pages/OfferRequest/OfferRequest.jsx';
// import Offer from '../pages/Offer/Offer.jsx';
// import OfferRequestList from '../pages/OfferRequest/OfferRequestList.jsx';
// import OfferRequestSample from '../pages/OfferRequest/OfferRequestSample.jsx';
// import OfferList from '../pages/Offer/OfferList.jsx';
// import Workspace from '../pages/Workspace/Workspace.jsx';
// import ManageUsers from '../pages/ManageUsers/ManageUsers.jsx';
import Settings from '../pages/Settings/Settings.jsx';
import BusinessAnalystAI from '../pages/BusinessAnalystAI/BusinessAnalystAI.jsx';
import TechnicalAnalystAI from '../pages/TechnicalAnalystAI/TechnicalAnalystAI.jsx';
import BusinessSystemAnalystAI from '../pages/BusinessSystemAnalystAI/BusinessSystemAnalystAI.jsx';
import UATAnalystAI from '../pages/UATAnalystAI/UATAnalystAI.jsx';
import ProjectManagerAI from '../pages/ProjectManagerAI/ProjectManagerAI.jsx';
import DeveloperAI from '../pages/DeveloperAI/DeveloperAI.jsx';
import QualityAnalystAI from '../pages/QualityAnalystAI/QualityAnalystAI.jsx';
import Register from '../pages/Auth/Register/Register.jsx';

const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/forgot-password',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <ForgotPassword /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    path: '/register',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Register /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/business-analyst-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <BusinessAnalystAI />
      },
    ],
  },
  {
    path: '/technical-analyst-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <TechnicalAnalystAI />
      },
    ],
  },
  {
    path: '/business-system-analyst-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <BusinessSystemAnalystAI />
      },
    ],
  },
  {
    path: '/uat-analyst-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <UATAnalystAI />
      },
    ],
  },
  {
    path: '/project-manager-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <ProjectManagerAI />
      },
    ],
  },
  {
    path: '/developer-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <DeveloperAI />
      },
    ],
  },
  {
    path: '/quality-analyst-ai',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <QualityAnalystAI />
      },
    ],
  },

  
  
  {
    path: '/settings',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Settings />
      },
    ],
  },
  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;