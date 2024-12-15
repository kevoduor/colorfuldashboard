import React from 'react';
import { 
  Calendar, Users, Stethoscope, Image, Users2, 
  Wallet, BarChart3, ShoppingCart, CreditCard,
  Package, Monitor, FileText, HeadphonesIcon
} from 'lucide-react';
import OrganicSphere from './OrganicSphere';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <OrganicSphere />
          <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            niah
          </span>
        </div>
        <div className="mt-4">
          <h2 className="text-gray-600">Sunshine Dental Clinic</h2>
          <p className="text-sm text-gray-400">San Francisco, CA</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <div className="py-2">
          <div className="text-sm font-medium text-gray-400 mb-2">MAIN</div>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
            <FileText size={20} />
            <span>Dashboard</span>
          </a>
        </div>

        <div className="py-2">
          <div className="text-sm font-medium text-gray-400 mb-2">CLINIC</div>
          {[
            { icon: <Calendar size={20} />, label: 'Reservations' },
            { icon: <Users size={20} />, label: 'Patients' },
            { icon: <Stethoscope size={20} />, label: 'Treatments' },
            { icon: <Image size={20} />, label: 'Imaging' },
            { icon: <Users2 size={20} />, label: 'Staff List' },
          ].map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="py-2">
          <div className="text-sm font-medium text-gray-400 mb-2">FINANCE</div>
          {[
            { icon: <Wallet size={20} />, label: 'Accounts' },
            { icon: <BarChart3 size={20} />, label: 'Sales' },
            { icon: <ShoppingCart size={20} />, label: 'Purchases' },
            { icon: <CreditCard size={20} />, label: 'Payment Method' },
          ].map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="py-2">
          <div className="text-sm font-medium text-gray-400 mb-2">PHYSICAL ASSET</div>
          {[
            { icon: <Package size={20} />, label: 'Stocks' },
            { icon: <Monitor size={20} />, label: 'Peripherals' },
          ].map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="py-2">
          {[
            { icon: <FileText size={20} />, label: 'Report' },
            { icon: <HeadphonesIcon size={20} />, label: 'Customer Support' },
          ].map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;