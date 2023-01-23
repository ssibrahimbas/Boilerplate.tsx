import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux'

import { AppDispatch, RootState } from '~plugins/store/root.store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
