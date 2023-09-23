"use client";

import { Tabs, Button } from "flowbite-react";
import { HiClipboardList, HiTable, HiUserGroup } from "react-icons/hi";
import ProductForm from "./Forms/ProductEntry";
const Navbar = () => {
  return (
    <div>
      <div className="justify-center">
        <Button color="failure">Logout</Button>
      </div>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item active icon={HiUserGroup} title="Users">
          <p>USER MANAGEMENT</p>
        </Tabs.Item>

        <Tabs.Item icon={HiTable} title=" Stock">
          <p>GET /api/products</p>
        </Tabs.Item>

        <Tabs.Item icon={HiClipboardList} title="Entry">
          <ProductForm />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Navbar;
