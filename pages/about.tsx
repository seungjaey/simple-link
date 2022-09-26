import type { MouseEventHandler } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const AboutPage: NextPage = () => {
    const { back } = useRouter()
    const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => back()
    return (
        <main>
            <button type="button" onClick={handleClickButton}>
                돌아가기
            </button>
        </main>
    )
}

export default AboutPage
