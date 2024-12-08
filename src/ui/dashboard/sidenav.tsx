import { PowerIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import AcmeLogo from '../acme-logo';
import NavLinks from './nav-links';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/AuthContext';
import { useState } from 'react';

export default function SideNav() {
  const navigate = useNavigate();
  const [logingout, setLogingout] = useState(false);
  const { logout } = useAuth();

  async function signout() {
    setLogingout(true);
    console.log('****** Sign out Processing...*****');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    logout();
    navigate('/');
    console.log('******* End Sign out *****');
  }

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        to="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signout();
          }}
        >
          <button
            type="submit"
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">
              {logingout ? 'Loging out...' : ' Login out '}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
