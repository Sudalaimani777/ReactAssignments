import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Q32: Mutating state in RTK
const userSlice = createSlice({
    name: 'user',
    initialState: { name: 'Alice', views: 0 },
    reducers: {
        incrementViews: (state) => {
            state.views += 1;
        },
    },
});

// Q33: Granular re-rendering
const UserNameComponent = () => {
    const name = useSelector((state) => state.user.name);
    return <h1>{name}</h1>;
};