import { createContext } from "react";
import { ICard } from "../models/ICard";

export const CardGameContext = createContext<ICard[]>([]);