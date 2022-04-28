export interface User {
	id: number
	name: string
	role: Role[]
}

interface Role {
	id: number
	name: string
}
