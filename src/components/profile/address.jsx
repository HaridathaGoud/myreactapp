import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import { Button, Spin } from "antd";
import "../../styles.css";
import { baseUrl } from "../services";
import ErrorMessage from "../messages/errorMessage";
import profileImg from "../../assets/images/profile-img.png";

const Address = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({ address: null, loading: false, error: null });
    const navigateToDashboard = () => {
        navigate('/');
    };
    React.useEffect(() => {
        getAddressData();
    }, []);
    const getAddressData = useCallback(async () => {
        setState({ ...state, loading: true });
        try {
            const response = await fetch(`${baseUrl}/profile/address`);
            const data = await response.json();
            setState({ ...state, address: data, loading: false });
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
                    {!state.loading && (<>
                        {state.error &&
                            <div className="error-message">
                                <ErrorMessage msg={state.error} onClose={clearError} />
                            </div>}
                        <>
                            <Button className="profile-back-btn" onClick={navigateToDashboard}> Back</Button>

                            <div className="profile-header">

                                <img
                                    src={profileImg || state.address?.avatar}
                                    alt="avatar"
                                    className="profile-avatar"
                                />
                            </div>

                            <div className="profile-grid">

                                <div>
                                    <div className="profile-label">Country</div>
                                    <div className="profile-value">{state.address?.country || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">State</div>
                                    <div className="profile-value">{state.address?.state || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">City</div>
                                    <div className="profile-value">{state.address?.city || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">Phone Number</div>
                                    <div className="profile-value">{state.address?.phone || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">Address Line 1</div>
                                    <div className="profile-value">{state.address?.addressLine1 || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">Address Line 2</div>
                                    <div className="profile-value">{state.address?.addressLine2 || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">Postal Code</div>
                                    <div className="profile-value">{state.address?.postalCode || '--'}</div>
                                </div>

                                <div>
                                    <div className="profile-label">Email</div>
                                    <div className="profile-value">{state.address?.email || '--'}</div>
                                </div>
                            </div>
                        </>
                    </>)}
                </div>
            </div>
        </div>
    );
}

export default Address