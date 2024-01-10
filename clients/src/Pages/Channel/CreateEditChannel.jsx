import React, { useState } from "react";
import "./CreateEditChannel.css";

function CreateEditChannel({ setEditCreateChanelBtn }) {
  const CurrentUser = {
    result: {
      email: "abzxy50312@gmail.com",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
  const [name, setName] = useState(CurrentUser?.result.name);
  const [desc, setDesc] = useState(CurrentUser?.result.desc);
  return (
    <div className="container_CreateEditChanel">
      <input
        onClick={() => setEditCreateChanelBtn(false)}
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChanel">
        <h1>
          {CurrentUser?.result.name ? <>Edit</> : <>Create </>}
          Your Chanel
        </h1>
        <input
          type="text"
          placeholder="Enter Your/Chanel Name"
          className="ibox"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          rows={15}
          placeholder={"Enter Chanel Description"}
          className={"ibox"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="submit"
          value={"Submit"}
          //   onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  );
}

export default CreateEditChannel;
