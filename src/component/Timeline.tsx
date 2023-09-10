import "./style.css";
import Item, {ItemProps} from "./Item.tsx";
import {ReactNode} from "react";
import {AiOutlineHistory} from "react-icons/ai";
export interface TimelineProps {
    items: ItemProps[];
    type?: 'left' | 'right' | 'both';
    icon?: ReactNode;
    titleClass?: string;
    contentClass?: string;
    iconClass?: string;
    timeClass?: string;
}

export default function Timeline(
    {
        items,
        type = 'both',
        icon = <AiOutlineHistory/>,
        titleClass = "",
        contentClass = "",
        iconClass = "",
        timeClass = "",

    }:
        TimelineProps
) {
    return (

        <div
            className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {items.map((item, index) => <Item
                {...item}
                icon={icon}
                side={type}
                key={index}
                timeClass={timeClass}
                iconClass={iconClass}
                titleClass={titleClass}
                contentClass={contentClass}

            />)}
        </div>
    )
}