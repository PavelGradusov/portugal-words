import MenuItem from "./menu-item";
import { Separator } from "./separator";

function Menu() {
  return (
    <div className="hidden lg:block">
      <nav className="flex flex-col min-h-[calc(100vh-6.5rem)] p-4">
        <h1 className="uppercase mx-auto my-1 tracking-widest font-bold">
          Rules
        </h1>
        <MenuItem href="/irregular">Irregular verbs</MenuItem>
        <MenuItem href="/regular-rules">Regular verb rules</MenuItem>
        <MenuItem href="/regular">Regular verbs</MenuItem>
        <Separator className="mt-4" />
        <h1 className="uppercase mx-auto my-1 tracking-widest font-bold">
          Cards
        </h1>
      </nav>
    </div>
  );
}

export default Menu;
