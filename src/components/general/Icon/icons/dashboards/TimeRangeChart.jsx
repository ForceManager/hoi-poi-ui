import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function TimeRangeChart({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#7D8A96"
                strokeMiterlimit="16"
                strokeWidth="1.2"
                d="M2.6 19v-8.5A1.4 1.4 0 0 1 4 9.1h3.625c.592 0 1.072-.48 1.072-1.072V5a1.4 1.4 0 0 1 1.4-1.4H20A1.4 1.4 0 0 1 21.4 5v9.077a1.4 1.4 0 0 1-1.4 1.4h-3.724a.88.88 0 0 0-.881.88V19a1.4 1.4 0 0 1-1.4 1.4H4A1.4 1.4 0 0 1 2.6 19Z"
            />
            <path
                fill="#A9B1B9"
                stroke="#A9B1B9"
                strokeWidth=".3"
                d="M12.082 7.815h.51c.154 0 .304-.019.41-.112.113-.099.137-.244.137-.387v-.448c0-.142-.024-.288-.138-.385-.107-.09-.257-.107-.41-.107h-.509c-.153 0-.303.017-.411.106-.117.096-.145.24-.145.386v.448c0 .146.028.29.143.389.108.091.258.11.413.11ZM14.949 7.815h.51c.155 0 .305-.019.413-.11.115-.098.142-.243.142-.389v-.448c0-.146-.027-.29-.144-.386-.108-.089-.258-.106-.411-.106h-.51c-.153 0-.303.017-.411.106-.118.096-.145.24-.145.386v.448c0 .146.027.29.143.389.107.091.258.11.413.11ZM17.576 7.815h.5c.156 0 .306-.019.414-.11.116-.098.143-.243.143-.389v-.448c0-.146-.027-.29-.145-.386-.108-.089-.258-.106-.411-.106h-.501c-.156 0-.308.017-.416.106-.116.098-.14.244-.14.386v.448c0 .143.024.289.138.388.108.093.26.111.418.111ZM12.082 10.261h.501c.153 0 .303-.016.411-.105.118-.096.145-.24.145-.386v-.448c0-.146-.027-.291-.143-.389-.107-.091-.258-.11-.413-.11h-.5c-.16 0-.311.018-.418.11-.115.1-.139.246-.139.389v.448c0 .142.024.288.14.385.108.09.26.106.416.106ZM14.949 10.261h.51c.152 0 .302-.016.408-.106.115-.098.139-.243.139-.385v-.448c0-.143-.024-.288-.136-.387-.107-.094-.257-.113-.411-.113h-.51c-.155 0-.306.02-.413.111-.116.098-.143.243-.143.389v.448c0 .145.027.29.145.386.108.089.258.105.411.105ZM17.567 10.254h.51c.152 0 .302-.017.409-.107.114-.097.138-.242.138-.385v-.448c0-.142-.023-.288-.138-.385-.107-.09-.257-.107-.41-.107h-.509c-.153 0-.303.017-.41.106-.118.096-.145.24-.145.386v.448c0 .146.027.29.144.386.108.089.258.106.411.106ZM17.576 12.744h.51c.152 0 .302-.017.409-.107.114-.097.138-.242.138-.385v-.448c0-.142-.024-.287-.139-.385-.106-.09-.256-.106-.409-.106h-.509c-.153 0-.303.016-.411.105-.118.096-.145.24-.145.386v.448c0 .146.027.29.145.387.108.088.258.105.411.105ZM14.949 12.744h.51c.152 0 .302-.017.408-.107.115-.097.139-.242.139-.385v-.448c0-.142-.024-.287-.139-.385-.106-.09-.256-.106-.409-.106h-.509c-.153 0-.303.016-.411.105-.118.096-.145.24-.145.386v.448c0 .146.027.29.145.387.108.088.258.105.411.105ZM12.082 12.744h.501c.153 0 .303-.017.411-.105.118-.096.145-.241.145-.387v-.448c0-.145-.027-.29-.145-.386-.108-.089-.258-.105-.411-.105h-.5c-.157 0-.309.016-.416.106-.117.097-.14.243-.14.385v.448c0 .143.023.289.14.386.107.09.26.106.415.106ZM9.207 12.744h.51c.152 0 .303-.017.41-.105.118-.096.145-.241.145-.387v-.448c0-.145-.027-.29-.145-.386-.107-.089-.258-.105-.41-.105h-.51c-.153 0-.304.016-.412.105-.117.096-.144.24-.144.386v.448c0 .146.027.29.144.387.108.088.259.105.412.105ZM6.34 12.744h.51c.152 0 .302-.017.408-.107.115-.097.139-.242.139-.385v-.448c0-.142-.024-.287-.139-.385-.106-.09-.256-.106-.409-.106h-.51c-.152 0-.302.016-.41.105-.118.096-.145.24-.145.386v.448c0 .146.027.29.145.387.108.088.258.105.41.105ZM6.34 15.234h.51c.154 0 .304-.019.41-.112.113-.099.137-.244.137-.387v-.448c0-.143-.024-.288-.139-.385-.106-.09-.256-.107-.409-.107h-.51c-.152 0-.302.017-.41.105-.118.097-.145.241-.145.387v.448c0 .146.027.29.143.389.107.091.258.11.413.11ZM9.207 15.234h.51c.154 0 .305-.019.412-.11.116-.098.143-.243.143-.39v-.447c0-.146-.027-.29-.145-.387-.107-.088-.258-.105-.41-.105h-.51c-.153 0-.304.017-.412.105-.117.097-.144.241-.144.387v.448c0 .146.027.29.142.389.108.091.259.11.414.11ZM12.082 15.234h.501c.155 0 .306-.019.413-.11.116-.098.143-.243.143-.39v-.447c0-.146-.027-.29-.145-.387-.108-.088-.258-.105-.411-.105h-.5c-.157 0-.309.017-.416.106-.117.098-.14.243-.14.386v.448c0 .143.023.289.138.388.107.092.259.111.417.111ZM6.34 17.6h.51c.154 0 .304-.02.41-.113.113-.099.137-.244.137-.387v-.448c0-.142-.024-.288-.139-.385-.106-.09-.256-.107-.409-.107h-.51c-.152 0-.302.017-.41.106-.118.096-.145.24-.145.386v.448c0 .146.027.29.143.389.107.091.258.11.413.11ZM9.207 17.6h.51c.154 0 .305-.02.412-.111.116-.098.143-.243.143-.389v-.448c0-.146-.027-.29-.145-.386-.107-.089-.258-.105-.41-.105h-.51c-.153 0-.304.016-.412.105-.117.096-.144.24-.144.386v.448c0 .146.027.29.142.389.108.091.259.11.414.11ZM12.082 17.6h.501c.155 0 .306-.02.413-.111.116-.098.143-.243.143-.389v-.448c0-.146-.027-.29-.145-.386-.108-.089-.258-.105-.411-.105h-.5c-.157 0-.309.016-.416.105-.117.098-.14.244-.14.386v.448c0 .143.023.289.138.388.107.093.259.111.417.111Z"
            />
        </svg>
    );
}

export default TimeRangeChart;