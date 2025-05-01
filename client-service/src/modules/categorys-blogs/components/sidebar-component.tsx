import { cn } from "@/lib/utils";
import { Sidebar, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenu, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { IconChevronRight } from "@tabler/icons-react";
import { ICategory } from "@/lib/schemas/category.schema";
import Image from "next/image";

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  categories: ICategory[];
}
export function SidebarComponent({ className, categories }: SidebarProps) {
  return (
    <Sidebar className={cn("pb-6 max-w-2xs", className)} collapsible='icon'>
      <SidebarGroupLabel className="h-8 text-md self-center"></SidebarGroupLabel>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="space-y-4 py-4">
            <SidebarMenu>
              {categories.map((category) => {
                return (
                  <Collapsible
                    key={category.category}
                    asChild
                    // defaultOpen={item.isActive}
                    className='group/collapsible'
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={category.category}
                        >
                          <div className="flex items-center gap-2">
                          <div className="w-6">
                            <Image src={category.category_image} alt={category.category} height={40} width={40} className=" object-contain rounded-sm" />
                          </div>
                          <span>{category.category}</span>
                          </div>
                          <IconChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {/* <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.label}>
                              <SidebarMenuSubButton
                                asChild
                              >
                                <span>{subItem.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent> */}
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  );
}
