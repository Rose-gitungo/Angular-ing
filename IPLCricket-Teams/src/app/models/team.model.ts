import { Player } from "./player.model";

export interface Team {
    name: string;
    icon: string;
    players: Player[];
    id: string;
}