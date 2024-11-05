"use client";
import TabsPanel from "@/components/tabs-panel";
import { Header } from "@/components/ui/header";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
const UserDetails = async({
  params,
}: {
  params: Promise<{ userId: string }>
}) => {
  const router = useRouter();

  const backToUsers = () => {
    router.back();
  };
  const userId = (await params).userId

  const blacklistUser = () => {
    //update status to blacklist
    console.log(userId)
  };
  const activateUser = () => {
    //update status to active
  };
  return (
    <div className="container">
      <button onClick={backToUsers} className="back-btn">
        <HiArrowLongLeft className="back-icon" /> Back to Users
      </button>

      <div className="header-wrapper">
        <Header
          label="Users Details"
          fontFamily="workSans"
          fontSize="24px"
          fontWeight="500"
        />

        <div className="header-action-btn">
          <Button
            variant="outlined"
            className="action-btn blacklist"
            onClick={blacklistUser}
          >
            BLACKLIST USER
          </Button>
          <Button
            variant="outlined"
            className="action-btn activate"
            onClick={activateUser}
          >
            ACTIVATE USER
          </Button>
        </div>
      </div>

      <TabsPanel
        id = {userId}
      />
    </div>
  );
};

export default UserDetails;
