
import images from "./images";
export const CustomersLinks: {
  title: string;
  href: string;
  icon: keyof typeof images;
}[] = [
  {
    title: "Users",
    href: "/users",
    icon: "users",
  },
  {
    title: "Guarantors",
    href: "/guarantors",
    icon: "guarantors",
  },
  {
    title: "Loans",
    href: "/loans",
    icon: "loans",
  },
  {
    title: "Decision Models",
    href: "/decision-models",
    icon: "decision",
  },
  {
    title: "Savings",
    href: "/savings",
    icon: "savings",
  },
  {
    title: "Loan Requests",
    href: "/loan-requests",
    icon: "loanRequests",
  },
  {
    title: "Whitelist",
    href: "/whitelist",
    icon: "whitelist",
  },
  {
    title: "Karma",
    href: "/karma",
    icon: "karma",
  },
];

export const BusinessLinks: {
  title: string;
  href: string;
  icon: keyof typeof images;
}[] = [
  {
    title: "Organization",
    href: "/organization",
    icon: "briefcase",
  },
  {
    title: "Loan Products",
    href: "/loan-products",
    icon: "loanRequests",
  },
  {
    title: "Savings Products",
    href: "/savings-products",
    icon: "savingsProduct",
  },
  {
    title: "Fees and Charges",
    href: "/fees",
    icon: "fees",
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: "transactions",
  },
  {
    title: "Services",
    href: "/services",
    icon: "services",
  },
  {
    title: "Service Account",
    href: "/service-account",
    icon: "serviceAccounts",
  },
  {
    title: "Settlements",
    href: "/settlements",
    icon: "settlements",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: "reports",
  },
];

export const SettingsLinks: {
  title: string;
  href: string;
  icon: keyof typeof images;
}[] = [
  {
    title: "Preferences",
    href: "/preferences",
    icon: "preferences",
  },
  {
    title: "Fees and Pricing",
    href: "/pricing",
    icon: "badge",
  },
  {
    title: "Audit Logs",
    href: "/audit-logs",
    icon: "audit",
  },
  {
    title: "System Messages",
    href: "/system-messages",
    icon: "tire",
  },
];

export const CardData: {
  label: string;
  value: string;
  color: string;
  icon: keyof typeof images;
}[] = [
  {
    label: "USERS",
    value: "2,453",
    color: "rgba(223, 24, 255, 0.1)",
    icon: "user",
  },
  {
    label: "ACTIVE USERS",
    value: "2,453",
    color: "rgba(87, 24, 255, 0.1)",
    icon: "activeUser",
  },
  {
    label: "USERS WITH LOANS",
    value: "12,453",
    color: "rgba(245, 95, 68, 0.1)",
    icon: "userLoans",
  },
  {
    label: "USERS WITH SAVINGS",
    value: "102,453",
    color: "rgba(255, 51, 102, 0.1)",
    icon: "usersWithSavings",
  },
];

export const TableHeaders = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];

const getStyle = (status: 'Inactive' | 'Pending' | 'Active' | 'Blacklisted') => {
    let style = {};
  
    switch (status) {
      case 'Inactive':
        style = {
          backgroundColor: 'rgba(84, 95, 125, 0.06)',
          color: 'rgba(84, 95, 125, 1)'
        };
        break;
      case 'Pending':
        style = {
          backgroundColor: 'rgba(233, 178, 0, 0.06)',
          color: 'rgba(233, 178, 0, 1)'
        };
        break;
      case 'Active':
        style = {
          backgroundColor: 'rgba(57, 205, 98, 0.06)',
          color: 'rgba(57, 205, 98, 1)'
        };
        break;
      case 'Blacklisted':
        style = {
          backgroundColor: 'rgba(228, 3, 59, 0.06)',
          color: 'rgba(228, 3, 59, 1)'
        };
        break;
      default:
        style = {
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
          color: 'rgba(0, 0, 0, 1)'
        };
        break;
    }
  
    return style;
  };
  
  export default getStyle;