import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs tracking-wider uppercase text-obsidian-500 font-medium">
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link to="/" className="hover:text-cognac-600 transition-colors flex items-center">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-obsidian-400" />
            {item.href ? (
              <Link to={item.href} className="hover:text-cognac-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-obsidian-800 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
