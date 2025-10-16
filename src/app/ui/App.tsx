import {Routing} from "@/common/routing/Routing.tsx";
import {Header} from "@/common/components/Header/Header.tsx";
import s from '@/app/App.module.css'

function App() {
    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing/>
            </div>
        </>
    )
}

export default App
