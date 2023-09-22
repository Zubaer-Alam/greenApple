'use client';

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiTable, HiUserGroup } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import ProductForm from './Forms/ProductEntry';

export default function Navbar() {
  return (
    <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
    >
      <Tabs.Item
        active
        icon={HiUserGroup}
        title="Users"
      >
        <p>
          USER MANAGEMENT
        </p>
      </Tabs.Item>

      <Tabs.Item
        icon={HiTable}
        title=" Stock"
      >
        <p>
          GET /api/products
        </p>
      </Tabs.Item>

      

      <Tabs.Item
        icon={HiClipboardList}
        title="Entry"
      ><ProductForm/>
      </Tabs.Item>

      <Tabs.Item
        disabled
        title="Disabled"

      >
        <p>
          Disabled content
        </p>
      </Tabs.Item>
    </Tabs.Group>
  )
}


