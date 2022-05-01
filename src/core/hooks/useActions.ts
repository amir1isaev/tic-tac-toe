import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StorageActions } from 'core/store/actions'
import { AppDispatch } from 'core/store'

const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators({ ...StorageActions }, dispatch)
}

export default useActions
