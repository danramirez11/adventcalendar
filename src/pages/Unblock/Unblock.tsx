import { useNavigate } from 'react-router'
import { supabase } from '../../data/supabase'
import './Unblock.css'

export const Unblock = () => {
    const navigate = useNavigate()

    const handleUnblock = async () => {
        const {error} = await supabase
                    .from('days')
                    .update({ isBlocked: false })
                    .eq('gift', 'Near Field Communication')
            
        if (error) throw error

        navigate('/')
    }

    return <main className="wholepage unblock">
        <section className="calendarFrame unblock">
            <h3 className='unblockText'>Desbloquear el regalo de hoy</h3>
            <button 
                className='openGift unblock'
                onClick={() => handleUnblock()}
                
            >desbloquear</button>
        </section>

    </main>
}