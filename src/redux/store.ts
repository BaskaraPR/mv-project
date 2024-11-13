"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projects";

export const store = configureStore({
	reducer: {
		activeProjectOption: projectReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
