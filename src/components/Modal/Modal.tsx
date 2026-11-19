import './Modal.css'

import { useEffect } from 'react'

import type { GiftType } from '../../types/types'
import {  UpdateFirstTime } from '../../data/supabase'

interface ModalProps {
    gift: GiftType
    handleClose: () => void
}

export const Modal = ({ gift, handleClose }: ModalProps) => {
    const hasUrl = typeof gift.url === 'string' && gift.url.trim().length > 0
    const hasImage =
        typeof gift.imgUrl === 'string' &&
        gift.imgUrl.trim().length > 0 &&
        gift.imgUrl !== 'string'

    useEffect(() => {
        if (!gift.isFirstTime) return

        console.log('hola')

        UpdateFirstTime(gift.id)
        
    }, [])

    return (
        <div className="modalOverlay" onMouseDown={handleClose}>
            <article
                className="giftTicket"
                role="dialog"
                aria-modal="true"
                aria-label={gift.name}
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    className="modalClose"
                    type="button"
                    onClick={handleClose}
                    aria-label="Cerrar"
                >
                    <span aria-hidden="true">×</span>
                </button>

                {gift.isFirstTime && <p className="newBadge">nuevo</p>}

                <div className="ticketContent">
                    {hasImage && (
                        <img className="giftImage" src={gift.imgUrl} alt="" />
                    )}

                    <h2 className="giftName">{gift.name}</h2>
                    <p className="giftDescription">{gift.desc}</p>
                </div>

                {hasUrl && (
                    <a
                        className="openGift"
                        href={gift.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        abrir <span aria-hidden="true">↗</span>
                    </a>
                )}
            </article>
        </div>
    )
}