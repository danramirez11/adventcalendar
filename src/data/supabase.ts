const supaUrl= "https://qrzkquxxvgufvicbhxpg.supabase.co"
const supaPubKey= "sb_publishable_R0TIHJUwIZWN-SY9MNIL8g_WpE6mEAo"

import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(supaUrl, supaPubKey)

export const getGifts = async () => {
	const { data, error } = await supabase.from('gifts').select('*')

	if (error) throw error

	return data
}

export const getDays = async () => {
	const { data, error } = await supabase.from('days').select('*')

	if (error) throw error

	return data
}

export const UpdateFirstTime = async (giftId: any) => {
    console.log(giftId)
    const {error} = await supabase
            .from('gifts')
            .update({ isFirstTime: false })
            .eq('id', giftId)
    
    if (error) throw error
}

