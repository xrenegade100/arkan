import clsx from "clsx";
import React from "react";

interface Props {
    text: string;
    icon: string;
    selected?: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<Props> = ({text, icon, selected, onClick}: Props) => {
    return (
        <div className={clsx("w-11/12 flex justify-start items-center rounded-l-2xl py-2",
        {
            "bg-primary-accent": selected,
        },
        )}>
            <span className="text-white material-symbols-rounded md-32 mx-3">{icon}</span>
            <span className="text-white font-body text-xl uppercase font-bold">{text}</span>
        </div>
    )
}

SidebarItem.defaultProps = {
    selected: false,
}

export default SidebarItem;