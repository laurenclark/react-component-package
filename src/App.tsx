import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { changeTheme } from './features/theme/theme.slice'

const App = () => {
    const theme = useAppSelector((state) => state.theme.theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(changeTheme('theme-alternate'))
        }, 5000)
    }, [])

    return (
        <div className={theme}>
            <h1>app</h1>
        </div>
    )
}

export default App
