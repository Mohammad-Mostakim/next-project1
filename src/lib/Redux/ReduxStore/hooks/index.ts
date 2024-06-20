import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, RootState } from "@/lib/Redux/ReduxStore"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<ReduxDispatchProps>()
// export const useAppSelector = useSelector.withTypes<ReduxSelectorProps>()

// export const useAppStore = useStore.withTypes<ReduxStoreProps>()

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()