"use client";

import { Tabs } from "flowbite-react";
import { HiClipboardList, HiTable, HiUserGroup } from "react-icons/hi";
import ProductForm from "./Forms/ProductEntry";
import Login from '../components/Login'

export default function Navbar() {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">

      <Tabs.Item active title="Login">
        <Login/>
      </Tabs.Item>

      <Tabs.Item active icon={HiUserGroup} title="Users">
        <p>USER MANAGEMENT</p>
      </Tabs.Item>

      <Tabs.Item icon={HiTable} title=" Stock">
        <p>GET /api/products</p>
      </Tabs.Item>

      <Tabs.Item icon={HiClipboardList} title="Entry">
        <ProductForm />
      </Tabs.Item>

      <Tabs.Item active title="Logout">
        <p>Disabled content</p>
      </Tabs.Item>

    </Tabs.Group>
  );
}
