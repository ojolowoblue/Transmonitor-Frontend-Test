import * as React from "react";

import { ReactComponent as OverviewIcon } from "app/assets/icons/overview.svg";
import { ReactComponent as PaymentIcon } from "app/assets/icons/payment.svg";
import { ReactComponent as ReconciledPaymentIcon } from "app/assets/icons/unreconciled-payment.svg";
import { ReactComponent as UnReconciledPaymentIcon } from "app/assets/icons/reconciled-payment.svg";
import { ReactComponent as ManualSettlementIcon } from "app/assets/icons/manual-settlement.svg";
import { ReactComponent as AllOrdersIcon } from "app/assets/icons/all-orders.svg";
import { ReactComponent as PendingOrdersIcon } from "app/assets/icons/pending-orders.svg";
import { ReactComponent as ReconciledOrdersIcon } from "app/assets/icons/reconciled-orders.svg";
import { ReactComponent as MerchantIcon } from "app/assets/icons/merchant.svg";

interface NavigationItemsProp {
  url: string;
  label: string;
  icon: React.ReactNode;
}

interface LinksProp {
  section?: string;
  navigationItems: NavigationItemsProp[];
}

export const links: LinksProp[] = [
  {
    section: "Main",
    navigationItems: [
      {
        url: "/",
        label: "Overview",
        icon: <OverviewIcon />,
      },
    ],
  },

  {
    section: "Payments",
    navigationItems: [
      {
        url: "/",
        label: "All Payments",
        icon: <PaymentIcon />,
      },
      {
        url: "/",
        label: "Reconcilled Payments",
        icon: <ReconciledPaymentIcon />,
      },
      {
        url: "/",
        label: "Un - Reconcilled Payments",
        icon: <UnReconciledPaymentIcon />,
      },
      {
        url: "/",
        label: "Manual Settlement",
        icon: <ManualSettlementIcon />,
      },
    ],
  },

  {
    section: "Orders",
    navigationItems: [
      {
        url: "/",
        label: "All Orders",
        icon: <AllOrdersIcon />,
      },
      {
        url: "/",
        label: "Pending Orders",
        icon: <PendingOrdersIcon />,
      },
      {
        url: "/",
        label: "Reconcilleds Orders",
        icon: <ReconciledOrdersIcon />,
      },
    ],
  },

  {
    section: "    ",
    navigationItems: [
      {
        url: "/",
        label: "Merchant Profile",
        icon: <MerchantIcon />,
      },
    ],
  },
];
