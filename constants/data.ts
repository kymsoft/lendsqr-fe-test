
import images from "./images";
import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { HiUser } from "react-icons/hi2";
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

export const NAVIGATION: Navigation = [
    {
      segment: 'organizations',
      title: 'Select Organizations',
      icon: typeof images.briefcase,
      children: []
    },
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: typeof images.dashboard,
    },
    {
      kind: 'header',
      title: 'CUSTOMERS',
    },
    {
      segment: 'users',
      title: 'Users',
      icon: typeof images.users,
    },
    {
      segment: 'guarantors',
      title: 'Guarantors',
      icon: typeof images.guarantors,
    },
    {
      segment: 'loans',
      title: 'Loans',
      icon: typeof images.loans,
    },
    {
      segment: 'decision-models',
      title: 'Decision Models',
      icon: typeof images.decision,
    },
    {
      segment: 'savings',
      title: 'Savings',
      icon: typeof images.savings,
    },
    {
      segment: 'loan-requests',
      title: 'Loan Requests',
      icon: typeof images.loanRequests,
    },
    {
      segment: 'whitelist',
      title: 'Whitelist',
      icon: typeof images.whitelist,
    },
    {
      segment: 'karma',
      title: 'Karma',
      icon: typeof images.karma,
    },
    {
      kind: 'header',
      title: 'BUSINESSES',
    },
    {
      segment: 'organization',
      title: 'Organization',
      icon: typeof images.briefcase,
    },
    {
      segment: 'loan-products',
      title: 'Loan Products',
      icon: typeof images.users,
    },
    {
      segment: 'savings-produvts',
      title: 'Savings Products',
      icon: typeof images.savingsProduct,
    },
    {
      segment: 'fees-and-charges',
      title: 'Fees and Charges',
      icon: typeof images.fees,
    },
    {
      segment: 'transactions',
      title: 'Transactions',
      icon: typeof images.transactions,
    },
    {
      segment: 'services',
      title: 'Services',
      icon: typeof images.services,
    },
    {
      segment: 'service-account',
      title: 'Service Accounts',
      icon: typeof images.users,
    },
    {
      segment: 'settlements',
      title: 'Settlements',
      icon: typeof images.settlements,
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: typeof images.reports,
    },
    {
      kind: 'header',
      title: 'SETTINGS',
    },
    {
      segment: 'preferences',
      title: 'Preferences',
      icon: typeof images.preferences,
    },
    {
      segment: 'fees-and-pricing',
      title: 'Fees and Pricing',
      icon: typeof images.badge,
    },
    {
      segment: 'audit-logs',
      title: 'Audit Loags',
      icon: typeof images.audit,
    },
    {
      kind: 'divider',
    },
    {
      segment: 'log-out',
      title: 'Log out',
      icon: typeof images.audit,
    },
  ];
  
// export const TableData: {
//   organization: string;
//   username: string;
//   email: string;
//   phone: string;
//   dateJoined: string;
//   status: "Inactive" | "Pending" | "Blacklisted" | "Active";
// }[] = [
//   {
//     organization: "Lendsqr",
//     username: "Adedeji",
//     email: "adedeji@lendsqr.com",
//     phone: "08078903721",
//     dateJoined: "May 15, 2020 10:00 AM",
//     status: "Inactive",
//   },
//   {
//     organization: "Irorun",
//     username: "Debby Ogana",
//     email: "debby2@irorun.com",
//     phone: "08160780928",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Pending",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phone: "07003309226",
//     dateJoined: "Apr 10, 2020 10:00 AM",
//     status: "Pending",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Active",
//   },
//   {
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phone: "08060780900",
//     dateJoined: "Apr 10, 2020 10:00 AM",
//     status: "Active",
//   },
//   {
//     organization: "Lendsqr",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phone: "08060780900",
//     dateJoined: "Apr 10, 2020 10:00 AM",
//     status: "Inactive",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Inactive",
//   },
// ];

