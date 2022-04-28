import { serverURI } from 'core/config'

export const postAPIRoutes = {
	getOne: (id: string) => `${serverURI}/post/${id}`,
	search: (param: string) => `${serverURI}/post/${param}`,
}

export const authAPIRoutes = {
	login: () => `${serverURI}/login`,
	register: () => `${serverURI}/register`,
}

export const userAPIRoutes = {
	getOne: (id: number) => `${serverURI}/user/${id}`,
}
