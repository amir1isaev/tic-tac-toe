import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StorageActions, UserActions, InterfaceAction } from 'core/redux/actions'
import { AppDispatch } from 'core/redux'

const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators({ ...UserActions, ...StorageActions, ...InterfaceAction }, dispatch)
}

export default useActions
