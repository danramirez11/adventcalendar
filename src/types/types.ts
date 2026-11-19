export interface DayType {
    day: number;
    id: string;
    isBlocked: boolean;
    gift: GiftType;
    type: 'simple'; 
}

export interface GiftType {
    id?: number;
    created_at?: string;
    name: string;
    desc: string;
    url?: string | null;
    imgUrl: string;
    isFirstTime: boolean;
}