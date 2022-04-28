import { ETheme } from 'core/enums'
import { darkTheme, lightTheme } from 'core/theme'
import { useCallback, useEffect, useState } from 'react'
import useTypedSelector from './useTypedSelector'

const useGetTheme = () => {
	const [theme, setTheme] = useState(darkTheme)
	const { themeType } = useTypedSelector(state => state.storage)

	const switchTheme = useCallback((state: boolean) => {
		if (state) {
			setTheme(darkTheme)
		} else {
			setTheme(lightTheme)
		}
	}, [])

	const systemTheme = useCallback(() => {
		const dark = window.matchMedia('(prefers-color-scheme: dark)')

		const isDark = dark.matches
		switchTheme(isDark)

		dark.addListener(e => switchTheme(e.matches))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		switch (themeType) {
			case ETheme.DARK:
				switchTheme(true)
				break
			case ETheme.LIGHT:
				switchTheme(false)
				break
			case ETheme.SYSTEM:
				systemTheme()
				break
			default:
				break
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [themeType])

	return { theme }
}

export default useGetTheme
