import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import { Button, Spin } from "antd";
import "../../styles.css";
import { baseUrl } from "../services";
import ErrorMessage from "../messages/errorMessage";
import profileImg from "../../assets/images/profile-img.png";


const Profile = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({ profile: null, loading: false, error: null });
  const navigateToDashboard = () => {
    navigate('/');
  };
  React.useEffect(() => {
    getProfileData();
  }, []);
  const getProfileData = useCallback(async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetch(`${baseUrl}/profile`);
      const data = await response.json();
      setState({ ...state, profile: data, loading: false });
    } catch (error) {
      setState({ ...state, error: error.message, loading: false });
    }
  }, [state]);
  const clearError = useCallback(() => {
    setState({ ...state, error: null });
  }, [state]);

  return (
    <div className="min-h-screen bg-[var(--bg)] py-10">
      <div className="container">

        {/* CARD */}
        <div className="profile-card">
          {state.loading &&
            <div className="flex items-center justify-center h-[250px] profile-loader">
              <Spin size="large" />
            </div>}
          {!state.loading && <>
            {state.error && <div className="error-message">
              <ErrorMessage msg={state.error} onClose={clearError} />
            </div>}
            <>
              <Button className="profile-back-btn" onClick={navigateToDashboard}> Back</Button>
              {/* AVATAR + TITLE */}
              <div className="profile-header">

                <img
                  src={profileImg ||state.profile?.avatar}
                  alt="avatar"
                  className="profile-avatar"
                />
              </div>

              {/* DETAILS GRID */}
              <div className="profile-grid">

                <div>
                  <div className="profile-label">First Name</div>
                  <div className="profile-value">{state.profile?.firstName || '--'}</div>
                </div>

                <div>
                  <div className="profile-label">Last Name</div>
                  <div className="profile-value">{state.profile?.lastName || '--'}</div>
                </div>

                <div>
                  <div className="profile-label">Email</div>
                  <div className="profile-value">{state.profile?.email || '--'}</div>
                </div>

                <div>
                  <div className="profile-label">Phone Number</div>
                  <div className="profile-value">{state.profile?.phone || '--'}</div>
                </div>

                <div>
                  <div className="profile-label">Country</div>
                  <div className="profile-value">{state.profile?.country || '--'}</div>
                </div>

                <div>
                  <div className="profile-label">User Name</div>
                  <div className="profile-value">{state.profile?.username || '--'}</div>
                </div>
              </div>
            </>
          </>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
