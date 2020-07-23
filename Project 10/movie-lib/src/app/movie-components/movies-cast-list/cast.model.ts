export default interface ICast {
    id:number;
    cast: {
        cast_id: number;
        character: string;
        credit_id: string;
        gender: number;
        id: number;
        name: string;
        order: number;
        profile_path: string;
    }[];
}