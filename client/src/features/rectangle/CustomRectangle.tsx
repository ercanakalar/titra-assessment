import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import Button from "../../components/button-element/Button";
import Input from "../../components/input-element/Input";
import { formAreaUrl } from "../../utils/url";

const CustomRectangle = (props: { position: any; long: number }) => {
  const { position, long } = props;
  const [name, setName] = useState<string>("");
  const [area, setArea] = useState<number>(0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch(formAreaUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ name, long }),
    })
      .then((res) => res.json())
      .then((data) => setArea(data.area));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Marker position={position}>
      <Popup>
        {area !== 0 ? <h1>{area}</h1> : null}
        <form onSubmit={handleSubmit} className="flex flex-col	">
          <Input
            className="border-solid rounded-lg	 border-2 border-rose-600"
            required
            type="text"
            placeholder="name"
            onChange={onChange}
          />
          <Button className="flex relative justify-center top-1.5 bg-rose-600 border-solid rounded-lg">
            <span className="">Send</span>
          </Button>
        </form>
      </Popup>
    </Marker>
  );
};

export default CustomRectangle;
