import { createSlice } from '@reduxjs/toolkit';

// Handy helpers for localStorage
const getUsersFromStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const saveUsersToStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const getCurrentUserFromStorage = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

const saveCurrentUserToStorage = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

const clearCurrentUserFromStorage = () => {
  localStorage.removeItem('currentUser');
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!getCurrentUserFromStorage(),
    user: getCurrentUserFromStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  clearError,
} = authSlice.actions;

// Thunks for handling async operations
export const loginUser = (username, password, role) => (dispatch) => {
  dispatch(loginStart());
  try {
    const users = getUsersFromStorage();
    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (user) {
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      saveCurrentUserToStorage(userWithoutPassword);
      dispatch(loginSuccess(userWithoutPassword));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  } catch (error) {
    dispatch(loginFailure('Login failed'));
  }
};

export const registerUser = (username, password, role) => (dispatch) => {
  dispatch(registerStart());
  try {
    const users = getUsersFromStorage();
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
      dispatch(registerFailure('Username already exists'));
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      password,
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsersToStorage(users);

    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    saveCurrentUserToStorage(userWithoutPassword);
    dispatch(registerSuccess(userWithoutPassword));
  } catch (error) {
    dispatch(registerFailure('Registration failed'));
  }
};

export const logoutUser = () => (dispatch) => {
  clearCurrentUserFromStorage();
  dispatch(logout());
};

export default authSlice.reducer;