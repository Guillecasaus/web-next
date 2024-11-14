"use client"
import { useRouter } from 'next/navigation'

function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, …</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md"
            onClick={() => {
                alert("Executing...")
                router.push('/')
            }}
        >
            Click
        </button>
    </section>
}
export default AboutPage;
