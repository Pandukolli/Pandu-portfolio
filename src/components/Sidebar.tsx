'use client';
import { Home, User, Brain, Briefcase, Award, FolderGit2, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: '', href: '/' },
  { icon: User, label: '', href: '/profile' },
  { icon: Brain, label: '', href: '/skills' },
  { icon: Briefcase, label: '', href: '/experience' },
  { icon: Award, label: '', href: '/certifications' },
  { icon: FolderGit2, label: '', href: '/projects' },
  { icon: Mail, label: '', href: '/contact' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 z-50 h-full w-16 pt-50 bg-black backdrop-blur-md flex-col items-center justify-start p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative my-2 flex items-center"
            onMouseEnter={() => setHoveredItem(item.href)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              className={`p-2 rounded-lg ${pathname === item.href ? 'bg-violet-300' : ''}`}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px var(--sidebar-ring)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <item.icon className="h-6 w-6 text-white" />
              {hoveredItem === item.href && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ zIndex: 50 }}
                >
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          </Link>
        ))}
      </nav>
      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-sidebar/30 backdrop-blur-md flex justify-around p-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredItem(item.href)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              className={`p-2 rounded-lg ${pathname === item.href ? 'bg-sidebar-primary/50' : ''}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <item.icon className="h-6 w-6 text-sidebar-foreground" />
            </motion.div>
          </Link>
        ))}
      </nav>
    </>
  );
}