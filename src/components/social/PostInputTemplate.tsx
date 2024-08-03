import React from "react";
import { IoCodeSlash, IoImage, IoSend, IoVideocam } from "react-icons/io5";

const PostInputTemplate: React.FC = () => {
  return (
    <section className="w-full h-40 bg-overlay-background rounded-xl cursor-pointer">
      <div className="h-[100px] p-5 flex gap-5">
        <img
          src=""
          alt=""
          className="h-[50px] w-[50px] bg-red-900 rounded-full"
        />
        <p className="text-base opacity-50">Add Typewritter Effect ...</p>
      </div>
      <div className="h-[60px] flex justify-between items-center px-5">
        <section className="flex gap-3">
          <IoImage
            className="text-action-button hover:text-highlight-border"
            size={22}
          />
          <IoVideocam
            className="text-action-button hover:text-highlight-border"
            size={22}
          />
          <IoCodeSlash
            className="text-action-button hover:text-highlight-border"
            size={22}
          />
        </section>
        <section>
          <IoSend
            className="text-action-button hover:text-highlight-border"
            size={22}
          />
        </section>
      </div>
    </section>
  );
};

export default PostInputTemplate;
