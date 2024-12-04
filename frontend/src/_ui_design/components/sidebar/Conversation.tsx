import React from "react";
import { ConversationType } from "../../../zustand/useConversation";
import e from "express";

const Conversation = ({conversation, emoji}: { conversation: ConversationType; emoji: string;}) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt={conversation.profilePic}
            />
          </div>
        </div>

        <div className="flex">
            <div className="flex">
                <p className="font-bold">
                    {conversation.fullName}
                </p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
