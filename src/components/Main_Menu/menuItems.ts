export interface MenuItem {
    title: string;
    icon: string;
    subItems?: Array<string>
}


export const menuItems: Array<MenuItem> = [
    {
        title: "Portfolio",
        icon: "fa-chart-pie",
        subItems: ["Log"]
    },
    {
        title: "Budget",
        icon: "fa-chart-bar",
        subItems: ["Month", "Year"]
    },
    {
        title: "Goals",
        icon: "fa-bullseye"
    },
    {
        title: "Inv. Calculator",
        icon: "fa-calculator"
    },
    {
        title: "Settings",
        icon: "fa-cogs"
    },
    {
        title: "Log out",
        icon: "fa-sign-out"
    },
]
