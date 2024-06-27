import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";



//For Register


export const registerUser = createAsyncThunk(
    'user/register',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('api/register', userInput);
            if (response?.data?.status_code === 201) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)


//for OTP

export const verifyOtp = createAsyncThunk(
    'user/verify-otp',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('otpapi', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Failed to verify OTP');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


// For Login


export const login = createAsyncThunk(
    'auth/login',
    async (userInput, { rejectWithValue }) => {

        try {
            const response = await api.post('api/login', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (err) {
            let errors = errorHandler(err);
            return rejectWithValue(errors);
        }
    }
)


//init state

const initialState = {
    message: null,
    error: null,
    loading: false,
    isLoggedIn: false,
    currentUser: {},
}



//slice part
const AuthSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {

            clearCurrentUser: (state) => {
                state.currentUser = {};
            },
            resetAfterLoggedIn: (state) => {
                state = { ...initialState, isLoggedIn: true };
            },

            logout: (state) => {
                state.isLoggedIn = false;
                state.currentUser = {};
                state.message = null;
                state.error = null
                localStorage.removeItem('dcbuserToken')
                localStorage.removeItem('user_id')
            }
        },
        extraReducers: (builder) => {
            builder.addCase(registerUser.pending, (state) => {
                state.message = null
                state.loading = true;
                state.error = null
            })
                .addCase(registerUser.fulfilled, (state, { payload }) => {
                    const { email, mobile, first_name, last_name, password } = payload;
                    state.loading = false;
                    state.message = payload;
                    state.currentUser = {
                        password: password,
                        email: email,
                        mobile: mobile,
                        first_name: first_name,
                        last_name: last_name,
                    };
                })
                .addCase(registerUser.rejected, (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                })
                .addCase(verifyOtp.pending, (state) => {
                    state.message = null;
                    state.error = null;
                    state.loading = true;
                })
                .addCase(verifyOtp.fulfilled, (state, { payload }) => {
                    const { message } = payload;
                    state.loading = false;
                    state.currentUser.otp_verified = 1;
                    state.message = message;
                })
                .addCase(verifyOtp.rejected, (state, response) => {
                    state.loading = false;
                    state.message =
                        response.payload !== undefined && response.payload.message
                            ? response.payload.message
                            : 'Something went wrong. Try again later.';
                })

                .addCase(login.pending, (state) => {
                    state.loading = true;
                    state.isLoggedIn = false;
                    state.error = false;
                })
                .addCase(login.fulfilled, (state, { payload }) => {
                    const { accessToken, password, userName, user } = payload;
                    state.isLoggedIn = true;

                    state.message = payload?.message;
                    state.loading = false;
                    state.currentUser = {
                        password: password,
                        userName: userName,
                    };
                    localStorage.setItem(
                        'dcbuserToken',
                        JSON.stringify({ token: accessToken })
                    );
                    localStorage.setItem(
                        'user_id',
                        JSON.stringify({ userId: user?.id })
                    );

                })
                .addCase(login.rejected, (state, { payload }) => {
                    state.error = true;
                    state.loading = false;
                    state.message =
                        payload !== undefined && payload.message
                            ? payload.message
                            : 'Something went wrong. Try again later.';
                })
        }
    }
)
export const { resetAfterLoggedIn, clearCurrentUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer