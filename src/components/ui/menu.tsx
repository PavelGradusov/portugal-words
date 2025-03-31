import MenuItem from "./menu-item";
import { Separator } from "./separator";

function Menu() {
  return (
    <nav className="flex flex-col min-h-[calc(100vh-6.5rem)] p-4">
      <h1 className="uppercase mx-auto my-1">Rules</h1>
      <MenuItem href="/one">ONE</MenuItem>
      <MenuItem href="/two">TWO</MenuItem>
      <MenuItem href="/three">THREE</MenuItem>
      <Separator className="mt-4" />
      <h1 className="uppercase mx-auto my-1">Cards</h1>
    </nav>
  );
}

export default Menu;
