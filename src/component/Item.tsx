import {tv} from "tailwind-variants";
import {motion} from "framer-motion";
import React from "react";
import {AiOutlineHistory} from "react-icons/ai";
import {twMerge} from "tailwind-merge";
export interface Media {
    type?: 'image' | 'video';
    src?: string;
    alt?: string;
}
export interface ItemData {
    title: string;
    time: string;
    side?: 'left' | 'right'|'both';
    icon?: React.ReactNode;
    content: string|React.ReactNode;
}

export interface ItemProps extends ItemData {
    iconClass?: string;
    contentClass?: string;
    titleClass?: string;
    timeClass?: string;
    media?: Media;
}
export function MediaProcessing({type,src,alt}:Media){
    if(type === 'image'){
        return <img
            className={"h-full  w-full object-cover"}
            src={src} alt={alt}/>
    } else if(type === 'video'){
        const hostname = new URL(src as string).hostname
        if (hostname === "youtu.be" || hostname === "www.youtube.com") {
            return (
                <iframe
                    className={"w-full h-full"}
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                />
            )
        } else return (
            <video controls={true} className={"w-full h-full"}>
                <source src={src} type="video/mp4" />
            </video>

            )
    }
}

export default function Item(
    {
        title,
        content,
        media={
        },
        time,
        side,
        icon = <AiOutlineHistory/>,
        iconClass = "",
        contentClass = "",
        titleClass = "",
        timeClass= "",
    }: ItemProps) {
    // noinspection TypeScriptValidateTypes
    const itemContainerClassVariants = tv({
        base: "relative flex items-center justify-between md:justify-normal group is-active ",
        variants: {
            side: {
                left: "md:flex-row flex-row",
                right: "md:flex-row-reverse flex-row-reverse ",
                both: "md:odd:flex-row-reverse "
            }
        },
        defaultVariants: {
            side: 'both'
        }
    })

    // noinspection TypeScriptValidateTypes
    const iconClassVariants = tv({
        base: "flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-900  text-white  shadow shrink-0 md:order-1 ",
        variants: {
            side: {
                left: "md:group-even:translate-x-1/2 md:group-odd:translate-x-1/2",
                right: "md:group-odd:-translate-x-1/2 md:group-even:-translate-x-1/2",
                both: "md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            }
        },
        defaultVariants: {
            side: 'both'
        }

    })

    return (
        <div className={itemContainerClassVariants({side})}>
            <div
                className={twMerge(iconClassVariants({side}),iconClass)}>
                {icon}
            </div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={
                    {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }
                }
                whileHover={{
                    scale: 1.05,
                    transition: {
                        duration: 0.2
                    }
                }}

                className={"w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white  cursor-pointer rounded border border-slate-200 shadow"}>
                <div className="flex items-center justify-between space-x-2  bg-gray-900 p-4 rounded-t">
                    <div className={twMerge("font-bold text-white",titleClass)}>{title}</div>
                    <time className={twMerge("font-caveat font-medium text-indigo-500",timeClass)}>{time}</time>
                </div>
                {
                    media && media.src && media.type &&
                    <div className={" h-48 w-full relative "}>
                    <MediaProcessing {...media}/>
                </div>
                }
                <div className={twMerge("p-4 text-neutral-500 truncate hover:whitespace-pre-wrap hover:text-clip duration-1000",contentClass)}>{content}</div>
            </motion.div>
        </div>
    )
}
