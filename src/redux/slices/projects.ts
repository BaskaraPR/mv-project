import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface activeProjectLayout {
	mode: "Pending Approval" | "Progress" | "History";
}

const initialState: activeProjectLayout = {
	mode: "Pending Approval",
};

const projectSlice = createSlice({
	name: "activeProjectLayout",
	initialState,
	reducers: {
		setSelectedproject: (
			state,
			action: PayloadAction<activeProjectLayout["mode"]>
		) => {
			state.mode = action.payload;
		},
	},
});

export const { setSelectedproject } = projectSlice.actions;

export default projectSlice.reducer;
