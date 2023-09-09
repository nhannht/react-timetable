import Timeline from "../component/Timeline.tsx";
import {Meta, StoryObj} from "@storybook/react";
import AESOP from "./assets/aesopsfables.webp"
import CONFUCIUS from "./assets/theanalectsofconfucius.webp"
import artofwar from "./assets/artofwar.webp"


const meta = {
    title: 'Timeline',
    component: Timeline,
    tags: ['autodocs'],
    parameters: {
    }
} satisfies Meta<typeof Timeline>

export default meta;
type Story = StoryObj<typeof meta>
export const Standard: Story = {
    args: {
        items: [
            {
                title: "\"Aesop’s Fables\" by Aesop",
                time: "Between 620 and 560 B.C.",
                content: "\"Aesop's Fables\" is a collection of stories that are meant to teach the listener a life lesson. The fables are often credited to an ancient Greek slave and storyteller named Aesop (though the origin of the fables remains disputed).\n" +
                    "\n" +
                    "The stories are still important moral lessons and have had a far-reaching impact on literature and common sayings, including \"wolf in sheep's clothing,\" \"boy who cried wolf,\" \"goose that laid the golden eggs,\" and many others.",
                media: {
                    type: 'image',
                    src: AESOP,
                }
            },
            {
                title: "\"The Analects of Confucius\" by Confucius",
                time: "between 475 and 221 B.C.",
                content: "Also known as simply \"Analects\" or \"Lunyu,\" this book is the collection of sayings and ideas attributed to the Chinese philosopher Confucius on how to live a virtuous life and be kind — what he referred to as ren.\n" +
                    "\n" +
                    "\"The Analects\" continues to have a profound influence on Eastern philosophy and ethics, especially in China.",
                media: {
                    type: 'image',
                    src: CONFUCIUS,
                }
            },
            {
                title: "\"Anne Frank: The Diary of a Young Girl\" by Anne Frank",
                time: "1947",
                content: "The book is a compilation of the diary writings of Anne Frank, a girl who hid with her family for two years during the Nazi occupation of the Netherlands. The family was discovered in 1944, and Frank died of typhus in the Bergen-Belsen concentration camp.\n" +
                    "\n" +
                    "Since its publication, \"Anne Frank: The Diary of a Young Girl\" has been translated into more than 60 languages and remains one of the most famous and influential primary documents from Europe in World War II.\n" +
                    "\n",
                media: {
                    type: 'video',
                    src:"https://www.youtube.com/embed/ond6r5pafjw?si=8oNWGe9JtieLbITN"
                }
            },
            {
                title: "\"The Art of War\" by Sun Tzu",
                time: "Written sometime between 600 and 500 B.C.",
                content: "\"The Art of War\" is an ancient Chinese military treatise attributed to Sun Tzu, a military general, strategist, and tactician. It is written in 13 chapters, each devoted to an aspect of warfare like spies, quick thinking, and avoiding massacres and atrocities.\n" +
                    "\n" +
                    "The book still has an influence on Eastern and Western military thinking, business tactics, legal strategy, and sports for its lessons on how to outsmart one's opponent.",
                media: {
                    type: 'image',
                    src: artofwar,
                }
            },
            ]
    }
}
