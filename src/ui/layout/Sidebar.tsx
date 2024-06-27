import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../images/logo/logo.svg';
// import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarLinkGroup from "../layout/SidebarLinkGroup";
import { logo } from '../../assets/images/images';

import { AiFillSetting, AiFillTag, AiFillTags, AiOutlineDashboard, AiOutlineLogout, AiOutlineNotification, AiOutlineUser, BsPersonWorkspace, MdManageAccounts } from "../../assets/icons/index";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      style={{zIndex:1}}
      className={`left-0 top-[50px] z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden shadow-md bg-white duration-300 ease-linear absolute -translate-x-full ${
        sidebarOpen ? 'translate-x-0 lg:absolute lg:-translate-x-full' : 'lg:translate-x-0 lg:static'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-[23px]">
        <NavLink to="/">
          {/* <img src={logo} alt="Logo" className='w-40' /> */}
          <p className='text-black text-[32px] font-bold font-Manrope'>Trade-Ideas</p>
          {/* &nbsp; */}
        </NavLink>

        {/* <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button> */}

        
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-0 py-4 px-4 lg:px-2">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-2 ml-4 text-sm font-semibold text-blue-800">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* <AiOutlineNotification /> */}
                  <AiOutlineDashboard />
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/business-analyst-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('business-analyst-ai') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Business Analyst AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Offer Request --> */}
              <li>
                <NavLink
                  to="/technical-analyst-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('technical-analyst-ai') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Technical Analyst AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Offer Request --> */}

              {/* <!-- Menu Item Offer --> */}
              <li>
                <NavLink
                  to="/business-system-analyst-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('business-system-analyst-ai') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Business System Analyst AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Offer --> */}

              {/* <!-- Menu Item Workspace --> */}
                <li>
                <NavLink
                  to="/uat-analyst-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('uat-analyst-ai') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  UAT Analyst AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Workspace --> */}


              {/* <!-- Menu Item Manage Users --> */}
                <li>
                <NavLink
                  to="/project-manager-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('project-manager-ai') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Project Manager AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Manage Users --> */}


              {/* <!-- Menu Item Manage Users --> */}
                <li>
                <NavLink
                  to="/developer-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('developer-ai') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Developer AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Manage Users --> */}


              {/* <!-- Menu Item Manage Users --> */}
                <li>
                <NavLink
                  to="/quality-analyst-ai"
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('quality-analyst-ai') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineNotification />
                  Quality Analyst AI
                </NavLink>
              </li>
              {/* <!-- Menu Item Manage Users --> */}



            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
