import Item from "../component/Item.tsx";
import {Meta, StoryObj} from "@storybook/react";
import Example1 from "./assets/example1.jpg"

const meta = {
    title: 'Item',
    component: Item,
    tags: ['autodocs'],
    parameters: {
    },
    argTypes:{
        side:{
            options:["left", "right"],
            control:{ type: "radio" },
        },

    }
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RichText: Story = {
    args: {
        title:"First event",
        time:new Date().toUTCString(),
        content: <div>
            <h1 className={"text-2xl text-indigo-500"}>Lorem ipsum</h1>
            <div>Beef is animal, we shouldn't eat beef 🥩</div>

        </div>
    }
}
export const StandardNoPicture: Story = {
    args: {
        title:"First event",
        time:new Date().toUTCString(),
        content: "Lorem aliquip pork, laboris t-bone hamburger corned beef leberkas pastrami biltong.  Sed ground round alcatra jerky, culpa eu short ribs cillum ribeye ut rump pastrami enim.  Ball tip swine ham, biltong turducken sint strip steak.  Boudin ut pork loin nulla.  Cupidatat bacon biltong t-bone tempor duis consectetur ut occaecat rump strip steak quis.  Venison nisi meatloaf alcatra velit, commodo fatback.  Pig filet mignon chuck beef chicken, nisi ut id flank sunt pancetta occaecat ad t-bone.\n" +
            "\n" +
            "Corned beef salami brisket boudin elit shank tail.  Picanha in ipsum, capicola est landjaeger quis frankfurter ex pork chop voluptate bacon commodo cillum do.  Boudin in bacon, elit officia leberkas ball tip pork chop pancetta quis short loin pariatur ut pastrami.  Labore pig pork chop, ham chislic in leberkas porchetta officia irure quis incididunt nostrud.  Veniam turducken beef aliquip cupidatat bacon ea turkey magna excepteur.  Dolore duis filet mignon sed cow ribeye.",

    }
}

export const StandardOnTheLeft: Story = {
    args: {
        title:"First event",
        time:new Date().toUTCString(),
        content: "Lorem aliquip pork, laboris t-bone hamburger corned beef leberkas pastrami biltong.  Sed ground round alcatra jerky, culpa eu short ribs cillum ribeye ut rump pastrami enim.  Ball tip swine ham, biltong turducken sint strip steak.  Boudin ut pork loin nulla.  Cupidatat bacon biltong t-bone tempor duis consectetur ut occaecat rump strip steak quis.  Venison nisi meatloaf alcatra velit, commodo fatback.  Pig filet mignon chuck beef chicken, nisi ut id flank sunt pancetta occaecat ad t-bone.\n" +
            "\n" +
            "Corned beef salami brisket boudin elit shank tail.  Picanha in ipsum, capicola est landjaeger quis frankfurter ex pork chop voluptate bacon commodo cillum do.  Boudin in bacon, elit officia leberkas ball tip pork chop pancetta quis short loin pariatur ut pastrami.  Labore pig pork chop, ham chislic in leberkas porchetta officia irure quis incididunt nostrud.  Veniam turducken beef aliquip cupidatat bacon ea turkey magna excepteur.  Dolore duis filet mignon sed cow ribeye.",
        side:"left"
    }
}
/**

 */
export const WithPicture: Story = {
    args: {
        title:"First event",
        time:new Date().toUTCString(),
        content: "Lorem aliquip pork, laboris t-bone hamburger corned beef leberkas pastrami biltong.  Sed ground round alcatra jerky, culpa eu short ribs cillum ribeye ut rump pastrami enim.  Ball tip swine ham, biltong turducken sint strip steak.  Boudin ut pork loin nulla.  Cupidatat bacon biltong t-bone tempor duis consectetur ut occaecat rump strip steak quis.  Venison nisi meatloaf alcatra velit, commodo fatback.  Pig filet mignon chuck beef chicken, nisi ut id flank sunt pancetta occaecat ad t-bone.\n" +
            "\n" +
            "Corned beef salami brisket boudin elit shank tail.  Picanha in ipsum, capicola est landjaeger quis frankfurter ex pork chop voluptate bacon commodo cillum do.  Boudin in bacon, elit officia leberkas ball tip pork chop pancetta quis short loin pariatur ut pastrami.  Labore pig pork chop, ham chislic in leberkas porchetta officia irure quis incididunt nostrud.  Veniam turducken beef aliquip cupidatat bacon ea turkey magna excepteur.  Dolore duis filet mignon sed cow ribeye.",
        media:{
            type:"image",
            src:Example1,
        }
    }
}

export const WithVideo: Story = {
    args: {
        title:"First event",
        time:new Date().toUTCString(),
        content: "Lorem aliquip pork, laboris t-bone hamburger corned beef leberkas pastrami biltong.  Sed ground round alcatra jerky, culpa eu short ribs cillum ribeye ut rump pastrami enim.  Ball tip swine ham, biltong turducken sint strip steak.  Boudin ut pork loin nulla.  Cupidatat bacon biltong t-bone tempor duis consectetur ut occaecat rump strip steak quis.  Venison nisi meatloaf alcatra velit, commodo fatback.  Pig filet mignon chuck beef chicken, nisi ut id flank sunt pancetta occaecat ad t-bone.\n" +
            "\n" +
            "Corned beef salami brisket boudin elit shank tail.  Picanha in ipsum, capicola est landjaeger quis frankfurter ex pork chop voluptate bacon commodo cillum do.  Boudin in bacon, elit officia leberkas ball tip pork chop pancetta quis short loin pariatur ut pastrami.  Labore pig pork chop, ham chislic in leberkas porchetta officia irure quis incididunt nostrud.  Veniam turducken beef aliquip cupidatat bacon ea turkey magna excepteur.  Dolore duis filet mignon sed cow ribeye.",
        media:{
            type:"video",
            src: "https://www.youtube.com/embed/pwFlCIpmRo0?si=HxqnLXC8AW9izuKb",
        }
    }
}