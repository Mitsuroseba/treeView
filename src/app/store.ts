import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import organizationTreeSliceReducer, { fetchOrganizationsTree } from '../slices/organizationTreeSlice'

export const store = configureStore({
  reducer: {
    organizationTree: organizationTreeSliceReducer
  }
})

void store.dispatch(fetchOrganizationsTree())

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
