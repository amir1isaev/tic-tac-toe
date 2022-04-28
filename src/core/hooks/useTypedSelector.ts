import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'core/redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
