import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import { IAccountCategoryBoxProps as Props } from "../../lib/types/types";

export default function CategoryBox(props: Props) {
    return (
        <div className="bg-[#262626] rounded-md shadow-md p-4">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">{props.category}</span>
                    <span className="text-sm text-gray-500">
                        {props.description}
                    </span>
                </div>
                <div className="flex flex-row ml-auto space-x-3">
                    <button className="bg-[#303030] hover:bg-[#404040] text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0">
                        <Icon path={mdiPencil} size={1} color="white" />
                    </button>
                    <button className="bg-[#303030] hover:bg-[#FD8180] text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0">
                        <Icon path={mdiDelete} size={1} color="white" />
                    </button>
                </div>
            </div>
        </div>
    );
}