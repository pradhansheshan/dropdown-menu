'use client'
import React from 'react'

import iconMap from './iconMap'
import menuItems from './menuData'
import { ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const Menu = () => (
<ul className="bg-black text-white w-64 border rounded-xl shadow-sm text-sm p-2">
  {menuItems.map(item => {
    if (item.type === "separator") {
      return (
        <Separator className='bg-slate-800 my-1' />
      );
    }
    const { name, key, subItems } = item;
    const Icon = iconMap[key];
    const isDelete = key === "delete";
    const textClass = key === "delete" ? "text-red-500 hover:bg-red-900/60" : "hover:bg-gray-800"
    const iconClass = isDelete ? "text-red-500 mr-2" : "text-gray-400 mr-2";
    return (
      <li key={key} className="relative group/items">
        <div className={`flex justify-between cursor-pointer rounded-lg p-2 ${textClass}`}>
          <div className="flex items-center">
            {Icon && <Icon className={iconClass} size={16} />}
            {name}
          </div>
          {subItems && <ChevronRight className='text-gray-400' size={18} />}
        </div>
        {subItems && (
          <ul className="
            absolute top-0 left-full  
            bg-black text-white w-48 border border-slate-800 rounded-lg shadow-lg 
            hidden group-hover/items:block p-1
            ">
            {subItems.map(({ name: subName, key: subKey, type: subType }) => {
                if (subType === "separator") {
                return (
                    <Separator className='bg-slate-800 my-1' />
                );
                }
              const SubIcon = iconMap[subKey];
              return (
                <li key={subKey} className="flex items-center p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                  {SubIcon && <SubIcon className="text-gray-400 mr-2" size={14} />}
                  {subName}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  })}
</ul>
);

export default Menu