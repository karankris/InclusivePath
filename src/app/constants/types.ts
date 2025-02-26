import { ReactNode } from "react";

export type Tabs = {
    id:number,
    title:string,
}

export type TabAI = {
    id:number,
    title:string,
    component:ReactNode
}

export type Question = {
 question:string,
 options:string[],
 answer:string[],
 response:string[],
 feedback:string[];
}

export type StatusItem = (id: string) => {
    background: string;
    text: string;
    border: string;
    icon: ReactNode; // Ensure ReactNode is used instead of a component type
  };
