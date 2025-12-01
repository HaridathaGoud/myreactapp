import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components";
import Loader from "../components/loader";
import ErrorComponent from "../components/shared/errorComponent";
import "../styles.css";


const Dashboard = lazy(() => import("../components/dashboard"));
const Profile = lazy(() => import("../components/profile"));
const Address = lazy(() => import("../components/profile/address"));
const Artha = lazy(() => import("../components/artha"));
const Warning = lazy(() => import("../components/warning"));


const AppRoutes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div><Loader /></div>}>
                        <Dashboard />
                    </Suspense>
                ),
                errorElement: <div className="page-error-container"><ErrorComponent /></div>,
            },
            {
                path: "/profile",
                element: (
                    <Suspense fallback={<div className='no-data-center'><Loader customClass="profile-loader" /></div>}>
                        <Profile />
                    </Suspense>
                ),
                errorElement: <div><ErrorComponent /></div>,
            },
            {
                path: "address",
                element: (
                    <Suspense fallback={<div className='no-data-center'><Loader customClass="profile-loader" /></div>}>
                        <Address />
                    </Suspense>
                ),
                errorElement: <div className="page-error-container"><ErrorComponent /></div>,
            },
            {
                path: "artha",
                element: (
                    <Suspense fallback={<div className='no-data-center'><Loader customClass="profile-loader" /></div>}>
                        <Artha />
                    </Suspense>
                ),
                errorElement: <div className="page-error-container"><ErrorComponent /></div>,
            },
            {
                path: "warning",
                element: (
                    <Suspense fallback={<div className='no-data-center'><Loader customClass="profile-loader" /></div>}>
                        <Warning />
                    </Suspense>
                ),
                errorElement: <div className="page-error-container"><ErrorComponent /></div>,
            },
            {
                path: "*",
                element: <div className="page-error-container"><ErrorComponent /></div>,
            },
        ],
    },

]);

export default AppRoutes;