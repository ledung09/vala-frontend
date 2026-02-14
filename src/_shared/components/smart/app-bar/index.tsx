import SearchBar from "@/_shared/components/smart/search-bar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_shared/components/ui/navigation-menu.tsx";

export function AppBar() {
  return (
    <div className="flex flex-col items-center gap-4 border-b p-6 pb-8">
      <div className="flex w-full items-center">
        <div className="mr-auto">App logo</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <SearchBar />
    </div>
  );
}
