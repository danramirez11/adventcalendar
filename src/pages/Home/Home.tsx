import { useEffect, useState } from "react"
import { getDays, getGifts } from "../../data/supabase"
import './Home.css'
import { Modal } from "../../components/Modal/Modal"

export const HomePage = () => {
    const [gifts, setGifts] = useState<any[]>([])
    const [days, setDays] = useState<any[]>([])
    const [selectedGift, setSelectedGift] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingFading, setIsLoadingFading] = useState(false)

    const handleClick = (giftName: string) => {
        const gift = gifts.find((g) => g.name === giftName)
        
        setSelectedGift(gift)
    }

    const closeModal = () => {
        setSelectedGift(null)
    }

    const getEverything = async () => {
        const giftsSupa = await getGifts()
        const daysSupa = await getDays()

        setDays(daysSupa)
        setGifts(giftsSupa)
    }
    
    useEffect(() => {
        getEverything()
    }, [])

    useEffect(() => {
        const fadeTimer = window.setTimeout(() => {
            setIsLoadingFading(true)
        }, 1500)

        const loadingTimer = window.setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => {
            window.clearTimeout(fadeTimer)
            window.clearTimeout(loadingTimer)
        }
    }, [])

    const sections = [0, 1, 2].map((section) =>
        days.slice(section * 4, section * 4 + 4)
    )

    const colorPattern = [
        ["green", "darkgreen", "red", "darkgreen"],
        ["red", "green", "darkgreen", "red"],
        ["darkgreen", "red", "darkgreen", "green"],
    ]

    const heightPattern = [
        [19, 24, 19, 34],
        [34, 19, 24, 19],
        [19, 34, 19, 24],
    ]

    return (
        <main className="wholepage">
            {isLoading && (
                <div
                    className={`loadingScreen${isLoadingFading ? " loadingScreen--fading" : ""}`}
                    aria-label="Cargando"
                >
                    <p>para thommy</p>
                </div>
            )}

            <header className="titleDiv" aria-label="Advent Calendar">
                <h1>ADVENT</h1>
                <h2>Calendar</h2>
            </header>

            <section className="calendarFrame" aria-label="Advent calendar days">
                <div className="calendarGrid">
                    {sections.map((section, sectionIndex) => (
                        <div className="dayColumn" key={sectionIndex}>
                            {section.map((day, dayIndex) => (
                                <button
                                    className={`dayCard dayCard--${colorPattern[sectionIndex][dayIndex]}`}
                                    style={{ height: `${heightPattern[sectionIndex][dayIndex]}%` }}
                                    type="button"
                                    key={day.id ?? `${sectionIndex}-${dayIndex}`}
                                    aria-label={`Day ${day.number ?? day.day}`}
                                    onClick={()=> {handleClick(day.gift)}}
                                    disabled = {day.isBlocked}
                                >
                                    <span>{day.number ?? day.day}</span>
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <footer className="calendarFooter">para thommy</footer>

            {selectedGift && <Modal gift={selectedGift} handleClose={closeModal}></Modal>}
        </main>
    )
}
