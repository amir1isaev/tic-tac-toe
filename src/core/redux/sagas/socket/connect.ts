import { socketURI } from 'core/config'
import { io } from 'socket.io-client'

const socketConnect = () => {
	console.log('[START CONNECT]')
	return io(socketURI, {
		withCredentials: true,
		extraHeaders: {
			'my-custom-header': 'abcd',
		},
	})
}

export default socketConnect
